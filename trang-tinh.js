/* Script dùng chung cho các trang tĩnh (Giới thiệu, Liên hệ, Chính sách bảo mật):
   đổi màu header khi cuộn và bật/tắt menu trên điện thoại. */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("siteHeader");
    const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }
});
