export const getImageUrl = (path) => {
  // Đảm bảo rằng bạn chỉ sử dụng thư mục public để lưu trữ tài nguyên tĩnh
  return `/assets/${path}`;
};
