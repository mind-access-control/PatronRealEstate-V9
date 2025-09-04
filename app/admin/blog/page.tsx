"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Upload,
  Eye,
  Calendar,
  User,
  MoreVertical,
  Archive,
  EyeOff,
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

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorEmail: string;
  category: string;
  status: string;
  publishDate: string;
  imageUrl: string;
  readTime: string;
  featured: boolean;
  views: number;
  file?: File;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Now Might Be the Best Time for Buyers in 2025",
    excerpt:
      "After years of intense competition and sky-high prices, the U.S. housing market is finally showing signs of relief for homebuyers—and the timing couldn't be better.",
    content:
      "After years of intense competition and sky-high prices, the U.S. housing market is finally showing signs of relief for homebuyers—and the timing couldn't be better. According to a recent article from MarketWatch, housing inventory in the U.S. has climbed to over 1 million active listings, the highest level since before the pandemic. With more homes on the market and fewer bidding wars, buyers now have more room to breathe, think, and negotiate.",
    author: "Patron Real Estate Services",
    authorEmail: "patronrealestateservices@gmail.com",
    category: "Market Analysis",
    status: "published",
    publishDate: "2024-01-15",
    imageUrl: "/placeholder.jpg",
    readTime: "8 min read",
    featured: true,
    views: 1247,
  },
  {
    id: 2,
    title: "Home Maintenance Calendar: What to Do Every Month",
    excerpt:
      "Prevent costly repairs with our month-by-month maintenance checklist. From HVAC to roof inspections, keep your home in top condition year-round.",
    content:
      "Prevent costly repairs with our month-by-month maintenance checklist. From HVAC to roof inspections, keep your home in top condition year-round. Regular maintenance is key to preserving your home's value and preventing expensive repairs down the line.",
    author: "Patron Real Estate Services",
    authorEmail: "patronrealestateservices@gmail.com",
    category: "Home Care",
    status: "draft",
    publishDate: "2024-01-10",
    imageUrl: "/placeholder.jpg",
    readTime: "14 min read",
    featured: false,
    views: 0,
  },
];

const categories = [
  "Market Analysis",
  "Home Care",
  "Investment Guides",
  "Neighborhood Guides",
  "Tips & Advice",
  "Company News",
];

export default function AdminBlogPage() {
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState(mockBlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    authorEmail: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || post.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit for images
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select a valid image file",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      toast({
        title: "Image selected",
        description: `${file.name} has been selected for upload`,
      });
    }
  };

  const handleUploadPost = () => {
    if (
      !newPost.title ||
      !newPost.category ||
      !newPost.author ||
      !newPost.authorEmail ||
      !newPost.content
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const post: BlogPost = {
      id: blogPosts.length + 1,
      ...newPost,
      status: "draft",
      publishDate: new Date().toISOString().split("T")[0],
      imageUrl: selectedFile
        ? URL.createObjectURL(selectedFile)
        : "/placeholder.jpg",
      readTime: "5 min read",
      featured: false,
      views: 0,
      file: selectedFile,
    };

    setBlogPosts([...blogPosts, post]);
    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "",
      authorEmail: "",
    });
    setSelectedFile(null);
    setShowUploadModal(false);

    toast({
      title: "Blog post created successfully",
      description: `${post.title} has been added to your blog`,
    });
  };

  const handleEditPost = () => {
    if (editingPost) {
      setBlogPosts(
        blogPosts.map((p) =>
          p.id === editingPost.id ? { ...p, ...editingPost } : p
        )
      );
      setEditingPost(null);
      setShowEditModal(false);

      toast({
        title: "Blog post updated",
        description: "Blog post information has been updated successfully",
      });
    }
  };

  const handleDeletePost = (id: number) => {
    const post = blogPosts.find((p) => p.id === id);
    if (post) {
      setBlogPosts(blogPosts.filter((p) => p.id !== id));
      toast({
        title: "Blog post deleted",
        description: `${post.title} has been removed from your blog`,
      });
    }
  };

  const handleArchivePost = (id: number) => {
    setBlogPosts(
      blogPosts.map((p) => (p.id === id ? { ...p, status: "archived" } : p))
    );

    const post = blogPosts.find((p) => p.id === id);
    if (post) {
      toast({
        title: "Blog post archived",
        description: `${post.title} has been moved to archive`,
      });
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setBlogPosts(
      blogPosts.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );

    const post = blogPosts.find((p) => p.id === id);
    if (post) {
      toast({
        title: "Status updated",
        description: `${post.title} is now ${newStatus}`,
      });
    }
  };

  const totalPosts = blogPosts.length;
  const publishedPosts = blogPosts.filter(
    (p) => p.status === "published"
  ).length;
  const archivedPosts = blogPosts.filter((p) => p.status === "archived").length;
  const totalViews = blogPosts.reduce((sum, p) => sum + p.views, 0);
  const featuredPosts = blogPosts.filter((p) => p.featured).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600 mt-2">
            Create, edit, and manage your blog articles and content.
          </p>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90"
          onClick={() => setShowUploadModal(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">{totalPosts}</p>
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
              <FileText className="h-5 w-5 text-emerald-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">
                  {publishedPosts}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-gray-600">Featured</p>
                <p className="text-2xl font-bold text-gray-900">
                  {featuredPosts}
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
                  {archivedPosts}
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
                placeholder="Search posts by title or author..."
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

      {/* Blog Posts List */}
      <Card className="bg-white shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Blog Posts ({filteredPosts.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500 flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.publishDate}
                      </span>
                      <Badge
                        variant={
                          post.status === "published"
                            ? "default"
                            : post.status === "archived"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {post.status}
                      </Badge>
                      {post.featured && (
                        <Badge variant="outline" className="text-yellow-600">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right text-sm">
                    <div className="flex items-center space-x-4 text-gray-600">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setPreviewPost(post);
                        setShowPreviewModal(true);
                      }}
                      title="Preview Post"
                    >
                      <Eye className="w-4 h-4" />
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
                            setEditingPost(post);
                            setShowEditModal(true);
                          }}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleStatusChange(
                              post.id,
                              post.status === "published"
                                ? "draft"
                                : "published"
                            )
                          }
                        >
                          {post.status === "published"
                            ? "Unpublish"
                            : "Publish"}
                        </DropdownMenuItem>
                        {post.status !== "archived" && (
                          <DropdownMenuItem
                            onClick={() => handleArchivePost(post.id)}
                          >
                            <Archive className="w-4 h-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDeletePost(post.id)}
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

            {filteredPosts.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-2">
                  No blog posts found
                </h3>
                <p className="text-sm">
                  Get started by creating your first blog post.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Create Blog Post Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Blog Post</DialogTitle>
            <DialogDescription>
              Add a new blog post to your content library. Fill in the details
              below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Post Title *</Label>
                <Input
                  id="title"
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  placeholder="Enter post title"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={newPost.category}
                  onValueChange={(value) =>
                    setNewPost({ ...newPost, category: value })
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
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={newPost.excerpt}
                onChange={(e) =>
                  setNewPost({ ...newPost, excerpt: e.target.value })
                }
                placeholder="Enter a brief excerpt for the post"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                placeholder="Enter the full content of your blog post"
                rows={8}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="author">Author Name *</Label>
                <Input
                  id="author"
                  value={newPost.author}
                  onChange={(e) =>
                    setNewPost({ ...newPost, author: e.target.value })
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
                  value={newPost.authorEmail}
                  onChange={(e) =>
                    setNewPost({ ...newPost, authorEmail: e.target.value })
                  }
                  placeholder="Enter author email"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="imageFile">Featured Image</Label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedFile ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <FileText className="w-8 h-8 text-green-600" />
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
                    <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                  </>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUploadModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleUploadPost}>Create Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Blog Post Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
            <DialogDescription>
              Update the blog post information and settings.
            </DialogDescription>
          </DialogHeader>
          {editingPost && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editTitle">Post Title</Label>
                  <Input
                    id="editTitle"
                    value={editingPost.title}
                    onChange={(e) =>
                      setEditingPost({
                        ...editingPost,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="editCategory">Category</Label>
                  <Select
                    value={editingPost.category}
                    onValueChange={(value) =>
                      setEditingPost({ ...editingPost, category: value })
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
                <Label htmlFor="editExcerpt">Excerpt</Label>
                <Textarea
                  id="editExcerpt"
                  value={editingPost.excerpt}
                  onChange={(e) =>
                    setEditingPost({
                      ...editingPost,
                      excerpt: e.target.value,
                    })
                  }
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor="editContent">Content</Label>
                <Textarea
                  id="editContent"
                  value={editingPost.content}
                  onChange={(e) =>
                    setEditingPost({
                      ...editingPost,
                      content: e.target.value,
                    })
                  }
                  rows={8}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="editAuthor">Author Name</Label>
                  <Input
                    id="editAuthor"
                    value={editingPost.author}
                    onChange={(e) =>
                      setEditingPost({
                        ...editingPost,
                        author: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="editStatus">Status</Label>
                  <Select
                    value={editingPost.status}
                    onValueChange={(value) =>
                      setEditingPost({ ...editingPost, status: value })
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
            <Button onClick={handleEditPost}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Blog Post Preview Modal */}
      <Dialog open={showPreviewModal} onOpenChange={setShowPreviewModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Blog Post Preview</DialogTitle>
            <DialogDescription>
              Preview your blog post content before publishing.
            </DialogDescription>
          </DialogHeader>
          {previewPost && (
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{previewPost.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>By {previewPost.author}</span>
                  <span>Date: {previewPost.publishDate}</span>
                  <span>Read time: {previewPost.readTime}</span>
                  <Badge variant="outline">{previewPost.category}</Badge>
                </div>
                {previewPost.excerpt && (
                  <p className="text-lg text-gray-600 italic">
                    {previewPost.excerpt}
                  </p>
                )}
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap">{previewPost.content}</p>
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
    </div>
  );
}
