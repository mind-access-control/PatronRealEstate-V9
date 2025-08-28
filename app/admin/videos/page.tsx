"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Video,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Upload,
  Eye,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Calendar,
  User,
  Play,
  MoreVertical,
  Archive,
  EyeOff,
  Download,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Mock data - in real app this would come from API

interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
  replies?: Comment[];
}

interface Video {
  id: number;
  title: string;
  description: string;
  author: string;
  authorEmail: string;
  duration: string;
  views: number;
  likes: number;
  dislikes: number;
  rating: number;
  category: string;
  status: string;
  uploadDate: string;
  thumbnail: string;
  videoUrl: string;
  comments: Comment[];
  file?: File;
}

const mockVideos: Video[] = [
  {
    id: 1,
    title: "Miami Beach Luxury Condo Tour",
    description: "Explore this stunning 3-bedroom condo with ocean views",
    author: "John Smith",
    authorEmail: "john.smith@patron.com",
    duration: "2:45",
    views: 1247,
    likes: 89,
    dislikes: 3,
    rating: 4.8,
    category: "Property Tours",
    status: "published",
    uploadDate: "2024-01-15",
    thumbnail: "/placeholder.jpg",
    videoUrl: "/sample-video-1.mp4",
    comments: [
      {
        id: 1,
        user: "Maria G.",
        text: "Beautiful property! When can I schedule a viewing?",
        date: "2024-01-16",
        replies: [
          {
            id: 11,
            user: "John Smith",
            text: "Hi Maria! You can schedule a viewing by calling us at (305) 555-0123 or emailing john.smith@patron.com",
            date: "2024-01-17",
          },
        ],
      },
      {
        id: 2,
        user: "Carlos R.",
        text: "Great video quality and presentation",
        date: "2024-01-17",
      },
    ],
  },
  {
    id: 2,
    title: "Downtown Miami Investment Guide",
    description:
      "Learn about the best investment opportunities in downtown Miami",
    author: "Sarah Johnson",
    authorEmail: "sarah.johnson@patron.com",
    duration: "4:12",
    views: 892,
    likes: 67,
    dislikes: 1,
    rating: 4.9,
    category: "Investment Guides",
    status: "published",
    uploadDate: "2024-01-10",
    thumbnail: "/placeholder.jpg",
    videoUrl: "/sample-video-2.mp4",
    comments: [
      {
        id: 3,
        user: "David L.",
        text: "Very informative! Can you send me more details?",
        date: "2024-01-11",
      },
    ],
  },
  {
    id: 3,
    title: "Coral Gables Neighborhood Overview",
    description: "Discover the charm and amenities of Coral Gables",
    author: "Mike Wilson",
    authorEmail: "mike.wilson@patron.com",
    duration: "3:28",
    views: 567,
    likes: 45,
    dislikes: 2,
    rating: 4.7,
    category: "Neighborhood Guides",
    status: "draft",
    uploadDate: "2024-01-08",
    thumbnail: "/placeholder.jpg",
    videoUrl: "/sample-video-3.mp4",
    comments: [],
  },
];

const categories = [
  "Property Tours",
  "Investment Guides",
  "Neighborhood Guides",
  "Market Updates",
  "Tips & Advice",
  "Company News",
];

export default function AdminVideosPage() {
  const { toast } = useToast();
  const [videos, setVideos] = useState(mockVideos);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [selectedVideoForComments, setSelectedVideoForComments] =
    useState<Video | null>(null);
  const [previewVideo, setPreviewVideo] = useState<Video | null>(null);
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    authorEmail: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || video.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || video.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        // 100MB limit
        toast({
          title: "File too large",
          description: "Please select a file smaller than 100MB",
          variant: "destructive",
        });
        return;
      }

      if (!file.type.startsWith("video/")) {
        toast({
          title: "Invalid file type",
          description: "Please select a valid video file",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      toast({
        title: "File selected",
        description: `${file.name} has been selected for upload`,
      });
    }
  };

  const handleUploadVideo = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a video file to upload",
        variant: "destructive",
      });
      return;
    }

    if (
      !newVideo.title ||
      !newVideo.category ||
      !newVideo.author ||
      !newVideo.authorEmail
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const video: Video = {
      id: videos.length + 1,
      ...newVideo,
      duration: "0:00",
      views: 0,
      likes: 0,
      dislikes: 0,
      rating: 0,
      status: "draft",
      uploadDate: new Date().toISOString().split("T")[0],
      thumbnail: "/placeholder.jpg",
      videoUrl: URL.createObjectURL(selectedFile),
      comments: [],
      file: selectedFile,
    };

    setVideos([...videos, video]);
    setNewVideo({
      title: "",
      description: "",
      category: "",
      author: "",
      authorEmail: "",
    });
    setSelectedFile(null);
    setShowUploadModal(false);

    toast({
      title: "Video uploaded successfully",
      description: `${video.title} has been added to your library`,
    });
  };

  const handleEditVideo = () => {
    if (editingVideo) {
      setVideos(
        videos.map((v) =>
          v.id === editingVideo.id ? { ...v, ...editingVideo } : v
        )
      );
      setEditingVideo(null);
      setShowEditModal(false);

      toast({
        title: "Video updated",
        description: "Video information has been updated successfully",
      });
    }
  };

  const handleDeleteVideo = (id: number) => {
    const video = videos.find((v) => v.id === id);
    if (video) {
      setVideos(videos.filter((v) => v.id !== id));
      toast({
        title: "Video deleted",
        description: `${video.title} has been removed from your library`,
      });
    }
  };

  const handleArchiveVideo = (id: number) => {
    setVideos(
      videos.map((v) => (v.id === id ? { ...v, status: "archived" } : v))
    );

    const video = videos.find((v) => v.id === id);
    if (video) {
      toast({
        title: "Video archived",
        description: `${video.title} has been moved to archive`,
      });
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setVideos(
      videos.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
    );

    const video = videos.find((v) => v.id === id);
    if (video) {
      toast({
        title: "Status updated",
        description: `${video.title} is now ${newStatus}`,
      });
    }
  };

  const handleDeleteComment = (videoId: number, commentId: number) => {
    setVideos(
      videos.map((video) => {
        if (video.id === videoId) {
          return {
            ...video,
            comments: video.comments.filter(
              (comment) => comment.id !== commentId
            ),
          };
        }
        return video;
      })
    );

    toast({
      title: "Comment deleted",
      description: "Comment has been removed successfully",
    });
  };

  const handleReplyToComment = (videoId: number, commentId: number) => {
    if (!replyText.trim()) {
      toast({
        title: "Empty reply",
        description: "Please enter a reply message",
        variant: "destructive",
      });
      return;
    }

    setVideos(
      videos.map((video) => {
        if (video.id === videoId) {
          return {
            ...video,
            comments: video.comments.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  replies: [
                    ...(comment.replies || []),
                    {
                      id: Date.now(),
                      user: "Admin",
                      text: replyText,
                      date: new Date().toISOString().split("T")[0],
                    },
                  ],
                };
              }
              return comment;
            }),
          };
        }
        return video;
      })
    );

    setReplyText("");
    setReplyingTo(null);

    toast({
      title: "Reply added",
      description: "Your reply has been posted successfully",
    });
  };

  const totalVideos = videos.length;
  const publishedVideos = videos.filter((v) => v.status === "published").length;
  const archivedVideos = videos.filter((v) => v.status === "archived").length;
  const totalViews = videos.reduce((sum, v) => sum + v.views, 0);
  const totalLikes = videos.reduce((sum, v) => sum + v.likes, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
          <p className="text-gray-600 mt-2">
            Upload, manage, and monitor your video content performance.
          </p>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90"
          onClick={() => setShowUploadModal(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Upload Video
        </Button>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Video className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Videos
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalVideos}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalViews.toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Likes</p>
                <p className="text-2xl font-bold text-gray-900">{totalLikes}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Play className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">
                  {publishedVideos}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Archive className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Archived</p>
                <p className="text-2xl font-bold text-gray-900">
                  {archivedVideos}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search videos by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Videos List */}
      <Card className="bg-white shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            Videos ({filteredVideos.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600">{video.description}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500 flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {video.author}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {video.uploadDate}
                      </span>
                      <Badge
                        variant={
                          video.status === "published"
                            ? "default"
                            : video.status === "archived"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {video.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right text-sm">
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {video.views}
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {video.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {video.comments.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setPreviewVideo(video);
                        setShowPreviewModal(true);
                      }}
                      title="Preview Video"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedVideoForComments(video);
                        setShowCommentsModal(true);
                      }}
                      title="View Comments"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => {
                            setEditingVideo(video);
                            setShowEditModal(true);
                          }}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusChange(
                              video.id,
                              video.status === "published"
                                ? "draft"
                                : "published"
                            )
                          }
                        >
                          {video.status === "published"
                            ? "Unpublish"
                            : "Publish"}
                        </DropdownMenuItem>
                        {video.status !== "archived" && (
                          <DropdownMenuItem
                            onClick={() => handleArchiveVideo(video.id)}
                          >
                            <Archive className="w-4 h-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDeleteVideo(video.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}

            {filteredVideos.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <Video className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-2">No videos found</h3>
                <p className="text-sm">
                  Get started by uploading your first video.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload Video Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Upload New Video</DialogTitle>
            <DialogDescription>
              Add a new video to your content library. Fill in the details
              below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Video Title *</Label>
                <Input
                  id="title"
                  value={newVideo.title}
                  onChange={(e) =>
                    setNewVideo({ ...newVideo, title: e.target.value })
                  }
                  placeholder="Enter video title"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={newVideo.category}
                  onValueChange={(value) =>
                    setNewVideo({ ...newVideo, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newVideo.description}
                onChange={(e) =>
                  setNewVideo({ ...newVideo, description: e.target.value })
                }
                placeholder="Enter video description"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="author">Author Name *</Label>
                <Input
                  id="author"
                  value={newVideo.author}
                  onChange={(e) =>
                    setNewVideo({ ...newVideo, author: e.target.value })
                  }
                  placeholder="Enter author name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="authorEmail">Author Email *</Label>
                <Input
                  id="authorEmail"
                  type="email"
                  value={newVideo.authorEmail}
                  onChange={(e) =>
                    setNewVideo({ ...newVideo, authorEmail: e.target.value })
                  }
                  placeholder="Enter author email"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="videoFile">Video File *</Label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedFile ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Video className="w-8 h-8 text-green-600" />
                      <span className="text-sm font-medium text-green-600">
                        {selectedFile.name}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFile(null);
                        }}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      MP4, WebM up to 100MB
                    </p>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUploadModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleUploadVideo} disabled={!selectedFile}>
              Upload Video
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Video Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Video</DialogTitle>
            <DialogDescription>
              Update the video information and settings.
            </DialogDescription>
          </DialogHeader>
          {editingVideo && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editTitle">Video Title</Label>
                  <Input
                    id="editTitle"
                    value={editingVideo.title}
                    onChange={(e) =>
                      setEditingVideo({
                        ...editingVideo,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="editCategory">Category</Label>
                  <Select
                    value={editingVideo.category}
                    onValueChange={(value) =>
                      setEditingVideo({ ...editingVideo, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="editDescription">Description</Label>
                <Textarea
                  id="editDescription"
                  value={editingVideo.description}
                  onChange={(e) =>
                    setEditingVideo({
                      ...editingVideo,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editAuthor">Author Name</Label>
                  <Input
                    id="editAuthor"
                    value={editingVideo.author}
                    onChange={(e) =>
                      setEditingVideo({
                        ...editingVideo,
                        author: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="editStatus">Status</Label>
                  <Select
                    value={editingVideo.status}
                    onValueChange={(value) =>
                      setEditingVideo({ ...editingVideo, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditVideo}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Video Preview Modal */}
      <Dialog open={showPreviewModal} onOpenChange={setShowPreviewModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Video Preview</DialogTitle>
            <DialogDescription>
              Preview your video content before publishing.
            </DialogDescription>
          </DialogHeader>
          {previewVideo && (
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                <video
                  className="w-full h-full rounded-lg"
                  controls
                  src={previewVideo.videoUrl}
                  poster={previewVideo.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{previewVideo.title}</h3>
                <p className="text-gray-600">{previewVideo.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>By {previewVideo.author}</span>
                  <span>Duration: {previewVideo.duration}</span>
                  <span>Views: {previewVideo.views}</span>
                  <span>Rating: {previewVideo.rating}/5</span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowPreviewModal(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Comments Modal */}
      <Dialog open={showCommentsModal} onOpenChange={setShowCommentsModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Video Comments</DialogTitle>
            <DialogDescription>
              Manage comments and respond to viewer feedback.
            </DialogDescription>
          </DialogHeader>
          {selectedVideoForComments && (
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-lg">
                  {selectedVideoForComments.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedVideoForComments.author}
                </p>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {selectedVideoForComments.comments.length > 0 ? (
                  selectedVideoForComments.comments.map((comment) => (
                    <div key={comment.id} className="space-y-3">
                      <div className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>
                            {comment.user.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">
                              {comment.user}
                            </span>
                            <span className="text-xs text-gray-500">
                              {comment.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">
                            {comment.text}
                          </p>
                          <div className="flex space-x-2 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setReplyingTo(comment)}
                            >
                              Reply
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600"
                              onClick={() =>
                                handleDeleteComment(
                                  selectedVideoForComments.id,
                                  comment.id
                                )
                              }
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-8 space-y-2">
                          {comment.replies.map((reply) => (
                            <div
                              key={reply.id}
                              className="flex space-x-3 p-2 bg-blue-50 rounded-lg"
                            >
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="text-xs">
                                  {reply.user.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-xs">
                                    {reply.user}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {reply.date}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-700 mt-1">
                                  {reply.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply Input */}
                      {replyingTo?.id === comment.id && (
                        <div className="ml-8 space-y-2">
                          <div className="flex space-x-2">
                            <Input
                              placeholder="Write your reply..."
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              className="flex-1"
                            />
                            <Button
                              size="sm"
                              onClick={() =>
                                handleReplyToComment(
                                  selectedVideoForComments.id,
                                  comment.id
                                )
                              }
                            >
                              Reply
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setReplyingTo(null);
                                setReplyText("");
                              }}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                    <p>No comments yet for this video.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowCommentsModal(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
