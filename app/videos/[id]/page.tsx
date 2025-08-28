"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  User,
  Eye,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Play,
  Share2,
  Bookmark,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getVideoById,
  getRelatedVideos,
  getCommentsForVideo,
} from "@/lib/video-data";

export default function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userLiked, setUserLiked] = useState<boolean | null>(null);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // Unwrap params for Next.js 15
  const { id } = use(params);

  // Get video data
  const videoData = getVideoById(id);
  const relatedVideos = getRelatedVideos(id, videoData?.category);
  const comments = getCommentsForVideo(id);

  if (!videoData) {
    return (
      <main className="flex-1 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Video not found</h1>
          <p className="text-muted-foreground mb-6">
            The video you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/videos">
            <Button>Back to Videos</Button>
          </Link>
        </div>
      </main>
    );
  }

  const [localLikes, setLocalLikes] = useState(videoData.likes);
  const [localDislikes, setLocalDislikes] = useState(videoData.dislikes);
  const [localViews, setLocalViews] = useState(videoData.views);

  const formattedDate = new Date(videoData.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatViews = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setLocalViews((prev) => prev + 1);
  };

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const handleLike = () => {
    if (userLiked === true) {
      setUserLiked(null);
      setLocalLikes((prev) => prev - 1);
    } else {
      if (userLiked === false) {
        setLocalDislikes((prev) => prev - 1);
      }
      setUserLiked(true);
      setLocalLikes((prev) => prev + 1);
    }
  };

  const handleDislike = () => {
    if (userLiked === false) {
      setUserLiked(null);
      setLocalDislikes((prev) => prev - 1);
    } else {
      if (userLiked === true) {
        setLocalLikes((prev) => prev - 1);
      }
      setUserLiked(false);
      setLocalDislikes((prev) => prev + 1);
    }
  };

  const handleComment = () => {
    if (commentText.trim()) {
      // In a real app, this would send the comment to an API
      console.log("New comment:", commentText);
      setCommentText("");
    }
  };

  const handleContact = () => {
    setShowContactModal(true);
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
    alert("Link copied to clipboard!");
  };

  return (
    <main className="flex-1 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="py-6 flex justify-center">
          <Button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-base font-semibold text-blue-700 hover:text-blue-900 transition-colors group cursor-pointer bg-white hover:bg-blue-50 px-6 py-3 rounded-lg border border-blue-200 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
            <span className="group-hover:text-blue-900">← Back to Videos</span>
          </Button>
        </div>

        {/* Video Player Section */}
        <section className="mb-8 mt-6">
          <div className="relative bg-black rounded-lg overflow-hidden">
            {!isPlaying ? (
              <div className="relative">
                <img
                  src={videoData.thumbnailUrl}
                  alt={videoData.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 hover:bg-white text-black rounded-full w-20 h-20 cursor-pointer hover:scale-110 transition-all duration-200"
                    onClick={handlePlay}
                  >
                    <Play className="w-10 h-10 ml-1" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  {videoData.duration}
                </div>
              </div>
            ) : (
              <video
                className="w-full h-96 md:h-[500px]"
                controls
                autoPlay
                src={videoData.videoUrl}
              >
                Your browser does not support the video element.
              </video>
            )}
          </div>
        </section>

        {/* Video Info Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Title and Category */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="default">{videoData.category}</Badge>
                  {videoData.featured && (
                    <Badge variant="secondary">Featured</Badge>
                  )}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {videoData.title}
                </h1>
              </div>

              {/* Stats and Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{formatViews(localViews)} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{videoData.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{videoData.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleShare}
                    className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Rating and Like/Dislike */}
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Rate:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`cursor-pointer transition-colors hover:scale-110 ${
                          star <= (userRating || videoData.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        <Star className="h-6 w-6 fill-current" />
                      </button>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({userRating ? "Your rating" : `${videoData.rating}/5`})
                  </span>
                </div>

                {/* Like/Dislike */}
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    className={`flex items-center gap-2 hover:bg-green-50 hover:text-green-600 transition-colors cursor-pointer ${
                      userLiked === true ? "text-green-600 bg-green-50" : ""
                    }`}
                    onClick={handleLike}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>{localLikes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className={`flex items-center gap-2 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer ${
                      userLiked === false ? "text-red-600 bg-red-50" : ""
                    }`}
                    onClick={handleDislike}
                  >
                    <ThumbsDown className="h-5 w-5" />
                    <span>{localDislikes}</span>
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {videoData.description}
                </p>
              </div>

              {/* Tags */}
              {videoData.tags && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {videoData.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={videoData.authorAvatar} />
                  <AvatarFallback>{videoData.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{videoData.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Real Estate Agent
                  </p>
                </div>
              </div>
              <Button
                className="w-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                variant="outline"
                onClick={handleContact}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>

            {/* Related Videos */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Related Videos</h3>
              <div className="space-y-4">
                {relatedVideos.map((video) => (
                  <Link
                    key={video.id}
                    href={`/videos/${video.id}`}
                    className="flex gap-3 group cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-20 h-16 object-cover rounded group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>{formatViews(video.views)} views</span>
                        <span>•</span>
                        <span>{video.rating}/5</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="mb-8">
          <div className="border-t pt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">
                Comments ({comments.length})
              </h3>
              <Button
                variant="ghost"
                onClick={() => setShowComments(!showComments)}
                className="cursor-pointer"
              >
                {showComments ? "Hide" : "Show"} Comments
              </Button>
            </div>

            {showComments && (
              <>
                {/* Add Comment */}
                <div className="mb-6">
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="min-h-[100px]"
                      />
                      <div className="flex justify-end mt-2">
                        <Button
                          onClick={handleComment}
                          disabled={!commentText.trim()}
                          className="cursor-pointer"
                        >
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback>
                          {comment.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-muted/30 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {comment.author}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {new Date(comment.date).toLocaleDateString(
                                  "en-US"
                                )}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="cursor-pointer"
                            >
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {comment.likes}
                            </Button>
                          </div>
                          <p className="text-sm">{comment.content}</p>
                        </div>

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="ml-8 mt-3 space-y-3">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex gap-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={reply.avatar} />
                                  <AvatarFallback>
                                    {reply.author.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="bg-muted/20 rounded-lg p-3">
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="flex items-center gap-2">
                                        <span className="font-medium text-sm">
                                          {reply.author}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                          {new Date(
                                            reply.date
                                          ).toLocaleDateString("en-US")}
                                        </span>
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="cursor-pointer"
                                      >
                                        <ThumbsUp className="w-3 h-3 mr-1" />
                                        {reply.likes}
                                      </Button>
                                    </div>
                                    <p className="text-sm">{reply.content}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                Contact {videoData.author}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href={`mailto:${videoData.author
                    .toLowerCase()
                    .replace(" ", ".")}@patron.com`}
                  className="text-primary hover:underline cursor-pointer"
                >
                  {videoData.author.toLowerCase().replace(" ", ".")}@patron.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+13055550123"
                  className="text-primary hover:underline cursor-pointer"
                >
                  +1 (305) 555-0123
                </a>
              </div>
              <div className="pt-4 border-t">
                <Button
                  className="w-full cursor-pointer"
                  onClick={() => setShowContactModal(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Share Video</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Video URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={`${window.location.origin}/videos/${id}`}
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-md bg-gray-50"
                  />
                  <Button
                    variant="outline"
                    onClick={() =>
                      copyToClipboard(`${window.location.origin}/videos/${id}`)
                    }
                    className="cursor-pointer"
                  >
                    Copy
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Share via</label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 cursor-pointer"
                    onClick={() => {
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          `${window.location.origin}/videos/${id}`
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 cursor-pointer"
                    onClick={() => {
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          `${window.location.origin}/videos/${id}`
                        )}&text=${encodeURIComponent(
                          `Check out this video: ${videoData.title}`
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    Twitter
                  </Button>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button
                  className="w-full cursor-pointer"
                  onClick={() => setShowShareModal(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
