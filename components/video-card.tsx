"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  User,
  Play,
  Eye,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  X,
} from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  rating: number;
  likes: number;
  dislikes: number;
  featured?: boolean;
}

export function VideoCard({
  id,
  title,
  description,
  author,
  date,
  category,
  thumbnailUrl,
  videoUrl,
  duration,
  views,
  rating,
  likes,
  dislikes,
  featured = false,
}: VideoCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userLiked, setUserLiked] = useState<boolean | null>(null);
  const [localLikes, setLocalLikes] = useState(likes);
  const [localDislikes, setLocalDislikes] = useState(dislikes);
  const [localViews, setLocalViews] = useState(views);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
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
    setIsVideoOpen(true);
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

  if (featured) {
    return (
      <>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img
                src={thumbnailUrl || "/placeholder.svg"}
                alt={title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16 cursor-pointer"
                  onClick={handlePlay}
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                {duration}
              </div>
              <Badge className="absolute top-3 left-3">Featured</Badge>
            </div>
            <div className="md:w-1/2">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="default">{category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4 line-clamp-2">
                    {title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{duration}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{formatViews(localViews)} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{rating}/5</span>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`cursor-pointer transition-colors ${
                          star <= (userRating || rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      >
                        <Star className="h-5 w-5 fill-current" />
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({userRating ? "Your rating" : `${rating}/5`})
                    </span>
                  </div>

                  {/* Like/Dislike */}
                  <div className="flex items-center gap-4 mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex items-center gap-2 ${
                        userLiked === true ? "text-green-600" : ""
                      }`}
                      onClick={handleLike}
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{localLikes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex items-center gap-2 ${
                        userLiked === false ? "text-red-600" : ""
                      }`}
                      onClick={handleDislike}
                    >
                      <ThumbsDown className="h-4 w-4" />
                      <span>{localDislikes}</span>
                    </Button>
                  </div>

                  <Button
                    className="w-full cursor-pointer"
                    onClick={handlePlay}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Play Video
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Video Modal */}
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 bg-black border-0">
            <DialogHeader className="p-4 bg-black text-white border-b border-gray-800">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-lg font-semibold line-clamp-1">
                  {title}
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={() => setIsVideoOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </DialogHeader>
            <div className="relative bg-black">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-auto max-h-[60vh] object-contain"
                onEnded={() => setIsVideoOpen(false)}
                onError={(e) => {
                  console.error("Video error:", e);
                  setIsVideoOpen(false);
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 bg-black text-white border-t border-gray-800">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{formatViews(localViews)} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{duration}</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative">
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="lg"
              className="bg-white/90 hover:bg-white text-black rounded-full w-14 h-14 cursor-pointer"
              onClick={handlePlay}
            >
              <Play className="w-6 h-6 ml-1" />
            </Button>
          </div>
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {duration}
          </div>
          <Badge className="absolute top-3 left-3">{category}</Badge>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">{description}</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{formatViews(localViews)} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{rating}/5</span>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`cursor-pointer transition-colors ${
                    star <= (userRating || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  <Star className="h-4 w-4 fill-current" />
                </button>
              ))}
              <span className="ml-2 text-xs text-muted-foreground">
                ({userRating ? "Your rating" : `${rating}/5`})
              </span>
            </div>

            {/* Like/Dislike */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-2 text-xs ${
                  userLiked === true ? "text-green-600" : ""
                }`}
                onClick={handleLike}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{localLikes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-2 text-xs ${
                  userLiked === false ? "text-red-600" : ""
                }`}
                onClick={handleDislike}
              >
                <ThumbsDown className="h-4 w-4" />
                <span>{localDislikes}</span>
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full bg-transparent cursor-pointer"
              onClick={handlePlay}
            >
              <Play className="w-4 h-4 mr-2" />
              Play
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 bg-black border-0">
          <DialogHeader className="p-4 bg-black text-white border-b border-gray-800">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold line-clamp-1">
                {title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 rounded-full"
                onClick={() => setIsVideoOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
          <div className="relative bg-black">
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-auto max-h-[60vh] object-contain"
              onEnded={() => setIsVideoOpen(false)}
              onError={(e) => {
                console.error("Video error:", e);
                setIsVideoOpen(false);
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4 bg-black text-white border-t border-gray-800">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{formatViews(localViews)} views</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{duration}</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
