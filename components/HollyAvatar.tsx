import { CheckCircle } from "lucide-react";

interface HollyAvatarProps {
  size?: "w-32 h-32" | "w-16 h-16" | "w-12 h-12";
  showBadge?: boolean;
  showName?: boolean;
}

export default function HollyAvatar({
  size = "w-16 h-16",
  showBadge = false,
  showName = false,
}: HollyAvatarProps) {
  return (
    <div className="relative">
      <div
        className={`${size} bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center relative overflow-hidden`}
      >
        {/* Face Base */}
        <div
          className={`${
            size === "w-32 h-32"
              ? "w-28 h-28"
              : size === "w-16 h-16"
              ? "w-14 h-14"
              : "w-12 h-12"
          } bg-gradient-to-br from-amber-100 to-orange-200 rounded-full relative`}
        >
          {/* Hair - Long flowing */}
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "-top-3 left-2 w-24 h-20"
                : size === "w-16 h-16"
                ? "-top-1.5 left-1 w-12 h-10"
                : "-top-1 left-0.5 w-6 h-5"
            } bg-gradient-to-br from-amber-700 to-amber-900 rounded-full`}
          ></div>
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "-top-2 left-4 w-20 h-16"
                : size === "w-16 h-16"
                ? "-top-1 left-2 w-10 h-8"
                : "-top-0.5 left-1 w-5 h-4"
            } bg-gradient-to-br from-amber-600 to-amber-800 rounded-full`}
          ></div>

          {/* Eyes - Bright and friendly */}
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-10 left-6 w-4 h-4"
                : size === "w-16 h-16"
                ? "top-5 left-3 w-2 h-2"
                : "top-4 left-2.5 w-1.5 h-1.5"
            } bg-blue-500 rounded-full shadow-sm`}
          ></div>
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-10 right-6 w-4 h-4"
                : size === "w-16 h-16"
                ? "top-5 right-3 w-2 h-2"
                : "top-4 right-2.5 w-1.5 h-1.5"
            } bg-blue-500 rounded-full shadow-sm`}
          ></div>
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-10.5 left-6.5 w-2 h-2"
                : size === "w-16 h-16"
                ? "top-5.5 left-3.5 w-1 h-1"
                : "top-4.5 left-3 w-0.5 h-0.5"
            } bg-white rounded-full`}
          ></div>
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-10.5 right-6.5 w-2 h-2"
                : size === "w-16 h-16"
                ? "top-5.5 right-3.5 w-1 h-1"
                : "top-4.5 right-3 w-0.5 h-0.5"
            } bg-white rounded-full`}
          ></div>

          {/* Eyebrows */}
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-8 left-5 w-3 h-1"
                : size === "w-16 h-16"
                ? "top-4 left-2.5 w-1.5 h-0.5"
                : "top-3 left-2 w-1 h-0.5"
            } bg-amber-800 rounded-full`}
          ></div>
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-8 right-5 w-3 h-1"
                : size === "w-16 h-16"
                ? "top-4 right-2.5 w-1.5 h-0.5"
                : "top-3 right-2 w-1 h-0.5"
            } bg-amber-800 rounded-full`}
          ></div>

          {/* Nose - Subtle */}
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-14 left-1/2 transform -translate-x-1/2 w-1.5 h-2"
                : size === "w-16 h-16"
                ? "top-7 left-1/2 transform -translate-x-1/2 w-1 h-1"
                : "top-5.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5"
            } bg-orange-300 rounded-full`}
          ></div>

          {/* Mouth - Friendly smile */}
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-16 left-1/2 transform -translate-x-1/2 w-5 h-1.5"
                : size === "w-16 h-16"
                ? "top-8 left-1/2 transform -translate-x-1/2 w-2.5 h-1"
                : "top-6.5 left-1/2 transform -translate-x-1/2 w-2 h-0.5"
            } bg-pink-400 rounded-full`}
          ></div>

          {/* Cheeks - Natural blush */}
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-15 left-4 w-3 h-2"
                : size === "w-16 h-16"
                ? "top-7.5 left-2 w-1.5 h-1"
                : "top-6 left-1.5 w-1 h-0.5"
            } bg-pink-200 rounded-full opacity-70`}
          ></div>
          <div
            className={`absolute ${
              size === "w-32 h-32"
                ? "top-15 right-4 w-3 h-2"
                : size === "w-16 h-16"
                ? "top-7.5 right-2 w-1.5 h-1"
                : "top-6 right-1.5 w-1 h-0.5"
            } bg-pink-200 rounded-full opacity-70`}
          ></div>
        </div>
      </div>

      {/* Verification Badge */}
      {showBadge && (
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Name Tag */}
      {showName && (
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-gray-200">
          <span className="text-xs font-semibold text-gray-700">Holly</span>
        </div>
      )}
    </div>
  );
}
