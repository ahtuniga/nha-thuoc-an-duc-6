/* =========================================================
   NHÀ THUỐC AN ĐỨC 6 — THEME.JS (MỚI)
   Xử lý sự kiện bấm nút chuyển Dark Mode / Light Mode.
   Việc ĐẶT theme ban đầu (tránh chớp trắng - FOUC) đã được xử lý bằng
   1 đoạn script nhỏ inline ngay trong <head> của mỗi trang; file này chỉ
   lo phần người dùng chủ động bấm nút để đổi & lưu lại lựa chọn.
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        const html = document.documentElement;
        const isDark = html.getAttribute("data-theme") === "dark";
        const next = isDark ? "light" : "dark";

        html.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });
});
