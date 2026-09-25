/* =========================================================
   NHÀ THUỐC AN ĐỨC 6
   WEBSITE INTERACTION (FULL) — TRANG BÁCH KHOA Y KHOA

   GHI CHÚ TỐI ƯU: đã dọn bỏ đoạn code "feature-item / aboutDynamicImg"
   (hiệu ứng đổi ảnh khi hover mục "Về chúng tôi") vì trang bach_khoa.html
   không có phần tử HTML nào tương ứng — đây là code chết còn sót lại từ
   một phiên bản thiết kế cũ đã được thay bằng bố cục bento-grid.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HEADER SCROLL
       ===================================================== */
    const header = document.getElementById("siteHeader");
    function handleHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
    handleHeaderScroll();
    window.addEventListener("scroll", handleHeaderScroll, { passive: true });


    /* =====================================================
       MOBILE MENU
       ===================================================== */
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
        const navLinks = mainNav.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */
    const sections = document.querySelectorAll("main section[id]");
    const navigationLinks = document.querySelectorAll(".nav-link");
    const observerOptions = {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navigationLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add("active");
        });
    }, observerOptions);
    sections.forEach((section) => sectionObserver.observe(section));


    /* =====================================================
       PRODUCT MODAL ELEMENTS
       ===================================================== */
    const productGrid = document.getElementById("productGrid");
    const productModal = document.getElementById("productModal");
    const modalProductImage = document.getElementById("modalProductImage");
    const modalProductImageWrap = document.getElementById("modalProductImageWrap");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductCategory = document.getElementById("modalProductCategory");
    const modalProductDescription = document.getElementById("modalProductDescription");
    const modalIngredients = document.getElementById("modalIngredients");
    const modalBenefits = document.getElementById("modalBenefits");
    const modalUsage = document.getElementById("modalUsage");
    const modalUsers = document.getElementById("modalUsers");
    const modalNote = document.getElementById("modalNote");


    /* =====================================================
       XỬ LÝ TEXT AN TOÀN CHO MODAL
       ===================================================== */
    function setDetail(element, value) {
        if (!element) return;
        const paragraph = element.querySelector("p");
        if (!value || !String(value).trim()) {
            element.style.display = "none";
            return;
        }
        element.style.display = "";
        if (paragraph) paragraph.innerHTML = value;
    }


/* =====================================================
   TẠO PRODUCT CARD (CẤU TRÚC MỚI)
   ===================================================== */
function createProductCard(product) {
    const card = document.createElement("a");
    card.href = "#";
    card.className = "product-card"; 
    card.dataset.productId = product.id;
    card.setAttribute("aria-label", `Xem thông tin ${product.name}`);

    // HÀNG 1: BADGE (NEW) & MÃ CODE (Không để đè nhau)
    const topRow = document.createElement("div");
    topRow.className = "card-top-row";
    
    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = "New";
    
    const code = document.createElement("span");
    code.className = "card-code";
    code.textContent = product.name.substring(0, 2).toUpperCase() + "-01";
    
    topRow.appendChild(badge);
    topRow.appendChild(code);

    // HÀNG 2: TIÊU ĐỀ (Sang trọng, hiển thị 3 dòng)
    const title = document.createElement("h3");
    title.className = "card-title-elegant";
    title.textContent = product.name;

    // HÀNG 3: HÌNH ẢNH (Phóng to lấp đầy)
    const imageBox = document.createElement("div");
    imageBox.className = "product-image-box";
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";
    imageBox.appendChild(image);

    // HÀNG 4: FOOTER (Nút Khám phá trắng)
    const footer = document.createElement("div");
    footer.className = "card-footer";
    const btn = document.createElement("span");
    btn.className = "shop-btn-white";
    btn.textContent = "Khám phá";
    const price = document.createElement("span");
    price.className = "price-text-subtle";
    price.textContent = "Xem chi tiết chỉ định";
    
    footer.appendChild(btn);
    footer.appendChild(price);

    // Lắp ráp thẻ
    card.appendChild(topRow);
    card.appendChild(title);
    card.appendChild(imageBox);
    card.appendChild(footer);

    return card;
}

    /* =====================================================
       HỆ THỐNG: PHÂN TRANG + TÌM KIẾM
       ===================================================== */
    let currentPage = 1;
    const itemsPerPage = 200; 
    let currentProductsList = []; // Danh sách sản phẩm đang dùng (có thể là tất cả hoặc kết quả tìm kiếm)

    function renderProducts(reset = false) {
        if (!productGrid) return;
        if (typeof products === "undefined") {
            console.error("Không tìm thấy products.js");
            return;
        }

        if (reset) {
            productGrid.innerHTML = ""; // Xóa sạch khi reset (tìm kiếm mới)
        }

        const limit = currentPage * itemsPerPage;
        
        // Cắt mảng sản phẩm theo trang hiện tại (chỉ lấy phần sản phẩm MỚI cần in ra)
        const startIndex = (currentPage - 1) * itemsPerPage;
        const productsToRender = currentProductsList;

        productsToRender.forEach((product) => {
            const card = createProductCard(product);
            card.classList.add("reveal", "visible"); // Cho hiện hiệu ứng liền
            productGrid.appendChild(card);
        });

        // Xử lý nút Xem thêm
        const loadMoreContainer = document.getElementById("loadMoreContainer");
        if (loadMoreContainer) {
            if (currentProductsList.length > limit) {
                loadMoreContainer.style.display = "block";
            } else {
                loadMoreContainer.style.display = "none";
            }
        }
    }

    // KHỞI CHẠY BAN ĐẦU: Lấy toàn bộ sản phẩm
    if (typeof products !== "undefined") {
        currentProductsList = [...products];
        renderProducts(true);
    }

    /* =====================================================
       MỚI: BỘ LỌC DANH MỤC (Tất cả / Thực phẩm / Vitamin / Dụng cụ)
       Trước đây các nút .filter-btn trong bach_khoa.html tồn tại trên
       giao diện nhưng KHÔNG có bất kỳ code JS nào xử lý sự kiện click.
       ===================================================== */
    let activeCategoryFilter = "all";
    const filterButtons = document.querySelectorAll(".filter-btn");

    function applyFilters() {
        const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

        currentProductsList = products.filter((product) => {
            const matchesCategory =
                activeCategoryFilter === "all" ||
                product.category === activeCategoryFilter;

            const matchesKeyword =
                keyword === "" ||
                product.name.toLowerCase().includes(keyword) ||
                (product.category && product.category.toLowerCase().includes(keyword));

            return matchesCategory && matchesKeyword;
        });

        currentPage = 1;

        if (currentProductsList.length === 0) {
            productGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-light); padding: 30px;">Chưa có sản phẩm phù hợp với bộ lọc hiện tại.</p>`;
            const loadMoreContainer = document.getElementById("loadMoreContainer");
            if (loadMoreContainer) loadMoreContainer.style.display = "none";
        } else {
            renderProducts(true);
        }
    }

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategoryFilter = btn.dataset.filter || "all";
            applyFilters();
        });
    });

    // SỰ KIỆN NÚT "XEM THÊM"
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            currentPage++;
            renderProducts(false); // false = không xóa grid cũ, chỉ append thêm
        });
    }

    // SỰ KIỆN "TÌM KIẾM"
    // SỬA: gọi qua applyFilters() để tìm kiếm luôn kết hợp với bộ lọc
    // danh mục đang chọn, thay vì trước đây tìm kiếm sẽ bỏ qua bộ lọc.
    const searchInput = document.getElementById("productSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", applyFilters);
    }


    /* =====================================================
       MODAL HANDLING (ĐÓNG/MỞ THÔNG TIN SẢN PHẨM)
       ===================================================== */
    function openProductModal(product) {
        if (!productModal || !product) return;

        if (modalProductName) modalProductName.textContent = product.name;
        if (modalProductCategory) modalProductCategory.textContent = product.category || "";

        if (modalProductImage && product.image) {
            modalProductImage.src = product.image;
            modalProductImage.alt = product.name;
            modalProductImageWrap.style.display = "";
        } else if (modalProductImageWrap) {
            modalProductImageWrap.style.display = "none";
        }

        if (modalProductDescription) modalProductDescription.innerHTML = product.description || "";

        const details = product.details || {};
        setDetail(modalIngredients, details.ingredients);
        setDetail(modalBenefits, details.benefits);
        setDetail(modalUsage, details.usage);
        setDetail(modalUsers, details.users);
        setDetail(modalNote, details.note);

        productModal.classList.add("open");
        productModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeProductModal() {
        if (!productModal) return;
        productModal.classList.remove("open");
        productModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    // CLICK SẢN PHẨM MỞ MODAL
    if (productGrid) {
        productGrid.addEventListener("click", (event) => {
            const card = event.target.closest(".product-card");
            if (!card) return;
            event.preventDefault();

            const productId = card.dataset.productId;
            if (typeof products === "undefined") return;

            const product = products.find((item) => item.id === productId);
            if (product) openProductModal(product);
        });
    }

    // NÚT ĐÓNG MODAL
    const closeModalButtons = document.querySelectorAll("[data-close-modal]");
    closeModalButtons.forEach((button) => {
        button.addEventListener("click", closeProductModal);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeProductModal();
    });


    /* =====================================================
       SMOOTH SCROLL CHO INTERNAL LINKS
       ===================================================== */
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;
            
            const target = document.querySelector(targetId);
            if (!target) return;
            if (link.classList.contains("product-card")) return;

            event.preventDefault();
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });


    /* =====================================================
       SCROLL REVEAL (HIỆU ỨNG HIỂN THỊ KHI CUỘN)
       ===================================================== */
    function setupReveal() {
        const revealElements = document.querySelectorAll(".knowledge-card, .value-item, .about-feature");
        revealElements.forEach((element) => {
            element.classList.add("reveal");
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        revealElements.forEach((element) => revealObserver.observe(element));
    }
    setupReveal();

});
/* =====================================================
   MÔ HÌNH GIẢI PHẪU 3D - INTERACTIVE DATA & EVENTS
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
// GHI CHÚ TỐI ƯU: đã xoá mục dữ liệu "than" (Thận) vì ảnh giai_phau_3d
// chỉ có sẵn 8 bong bóng icon (không có icon Thận) nên hotspot thứ 9
// không có gì để khớp trên ảnh -> dữ liệu cũ này chưa từng dùng được.
const medicalOrganData = {
        nao: {
            tag: "HỆ THẦN KINH & TUẦN HOÀN",
            title: "Não Bộ & Sức Khỏe Tinh Thần",
            desc: "Não bộ là trung tâm điều khiển tối cao, quản lý tư duy, trí nhớ, cảm xúc và mọi hoạt động của cơ thể. Quá trình lão hóa, áp lực công việc hoặc thiếu hụt dưỡng chất có thể dẫn đến suy giảm trí nhớ, sương mù não, mất ngủ và đau đầu kinh niên. Việc duy trì tuần hoàn máu não lưu thông tốt là chìa khóa vàng để giữ một tinh thần minh mẫn, tăng hiệu suất làm việc và phòng ngừa đột quỵ.",
            advice: "Bổ sung các sản phẩm chứa Ginkgo Biloba, Omega-3 (DHA/EPA), CoQ10 và Magie giúp nuôi dưỡng tế bào thần kinh, giảm căng thẳng hiệu quả."
        },
        phoi: {
            tag: "HỆ HÔ HẤP",
            title: "Phổi & Đường Thở",
            desc: "Phổi đảm nhiệm vai trò sống còn: cung cấp oxy cho từng tế bào và đào thải độc tố dạng khí. Trong môi trường hiện đại nhiều khói bụi, vi khuẩn và thời tiết thay đổi thất thường, hệ hô hấp rất dễ bị viêm nhiễm, dẫn đến ho dai dẳng, viêm phế quản hoặc suy giảm chức năng hô hấp. Lá phổi khỏe mạnh giúp toàn bộ cơ thể dồi dào sinh lực.",
            advice: "Thường xuyên hít thở sâu, giữ ấm cổ ngực, uống đủ nước và dùng thảo dược như xuyên tâm liên, tỏi đen để làm sạch, bảo vệ phổi định kỳ."
        },
        daday: {
            tag: "HỆ TIÊU HÓA TRÊN",
            title: "Dạ Dày & Niêm Mạc",
            desc: "Dạ dày là trạm biến nạp thức ăn đầu tiên của cơ thể. Thói quen ăn uống không điều độ, stress kéo dài hoặc nhiễm khuẩn HP rất dễ gây viêm loét, trào ngược axit và tổn thương lớp niêm mạc. Khi dạ dày yếu, khả năng hấp thu dinh dưỡng giảm mạnh, cơ thể dễ mệt mỏi và suy nhược.",
            advice: "Nên ăn đúng giờ, nhai kỹ, tránh thức ăn cay nóng. Cân nhắc dùng tinh chất nghệ (Curcumin), mật ong hoặc các sản phẩm hỗ trợ tái tạo niêm mạc dạ dày."
        },
        xuongkhop: {
            tag: "HỆ VẬN ĐỘNG",
            title: "Hệ Xương Khớp & Sụn",
            desc: "Khung xương nâng đỡ toàn bộ cơ thể, cùng với hệ thống sụn khớp đóng vai trò như 'bộ giảm xóc', giúp cơ thể vận động dẻo dai. Từ sau tuổi 30, quá trình thoái hóa làm mất dần canxi trong xương và cạn kiệt dịch khớp, gây ra các cơn đau nhức mạn tính, cứng khớp và tăng nguy cơ loãng xương.",
            advice: "Bổ sung Canxi tự nhiên kết hợp Vitamin D3-K2 để dẫn canxi vào xương. Dùng thêm Glucosamine, Collagen tuýp 2 để tái tạo sụn và chất nhờn cho khớp."
        },
        tim: {
            tag: "HỆ TUẦN HOÀN",
            title: "Tim Mạch & Huyết Áp",
            desc: "Trái tim hoạt động bền bỉ để bơm máu mang oxy và dưỡng chất đi nuôi cơ thể. Mỡ máu cao, huyết áp không ổn định hoặc xơ vữa động mạch là những 'sát thủ thầm lặng' đe dọa trực tiếp đến tuổi thọ. Một hệ tim mạch khỏe mạnh quyết định sức bền và khả năng phục hồi của toàn cơ thể.",
            advice: "Kiểm soát cân nặng, hạn chế chất béo bão hòa. Sử dụng các dòng Omega-3 tinh khiết, Nattokinase để làm sạch mạch máu, chống cục máu đông."
        },
        gan: {
            tag: "HỆ CHUYỂN HÓA & GIẢI ĐỘC",
            title: "Gan & Chức Năng Bài Độc",
            desc: "Gan là 'nhà máy hóa chất' khổng lồ, đảm nhiệm hơn 500 chức năng quan trọng, đặc biệt là thanh lọc độc tố từ máu, chuyển hóa thuốc và dự trữ năng lượng. Khi gan bị quá tải do rượu bia hoặc hóa chất, cơ thể sẽ lập tức báo hiệu bằng sự mệt mỏi, mẩn ngứa, mụn nhọt, vàng da và chán ăn.",
            advice: "Hạn chế rượu bia, thức ăn chiên rán. Chủ động bảo vệ gan bằng dược liệu Kế sữa (Silymarin), Cà gai leo, Actiso giúp hạ men gan, phục hồi tế bào."
        },
        ruot: {
            tag: "HỆ TIÊU HÓA DƯỚI",
            title: "Đường Ruột & Hệ Vi Sinh",
            desc: "Đường ruột hấp thu tới 90% dưỡng chất và là 'trụ sở' của hơn 70% tế bào miễn dịch toàn cơ thể. Sự mất cân bằng hệ vi sinh (thiếu lợi khuẩn, thừa hại khuẩn) do dùng kháng sinh hay ăn uống kém vệ sinh là nguyên nhân gốc rễ của rối loạn tiêu hóa, đầy hơi, khó tiêu và đề kháng suy giảm.",
            advice: "Bổ sung men vi sinh (Probiotics) công nghệ màng bọc kép kết hợp chất xơ (Prebiotics) giúp lợi khuẩn sống sót qua axit dạ dày, nuôi dưỡng đường ruột."
        },
        miendich: {
            tag: "HỆ BẢO VỆ TỔNG THỂ",
            title: "Sức Đề Kháng & Miễn Dịch",
            desc: "Hệ miễn dịch là hàng rào phòng thủ tự nhiên, liên tục tuần tra và tiêu diệt các tác nhân gây bệnh (vi khuẩn, virus, nấm, tế bào lạ). Khi hàng rào này suy yếu, cơ thể rất dễ mắc các bệnh truyền nhiễm, ốm vặt dai dẳng và vết thương chậm lành.",
            advice: "Tăng cường sức đề kháng từ cấp độ tế bào bằng Vitamin C hàm lượng cao, Kẽm, Hồng sâm hoặc Đông trùng hạ thảo để duy trì cơ thể luôn khỏe mạnh."
        }
    };

    const hotspots = document.querySelectorAll(".anatomy-hotspot");
    const anatomyCategory = document.getElementById("anatomyCategory");
    const anatomyTitle = document.getElementById("anatomyTitle");
    const anatomyDescription = document.getElementById("anatomyDescription");
    const anatomyAdvice = document.getElementById("anatomyAdvice");
    const anatomyCloseBtn = document.getElementById("anatomyCloseBtn");

    hotspots.forEach(spot => {
        spot.addEventListener("click", () => {
            // Xóa active cũ, thêm active mới
            hotspots.forEach(s => s.classList.remove("active"));
            spot.classList.add("active");

            const organKey = spot.dataset.organ;
            const info = medicalOrganData[organKey];

            if (info && anatomyTitle) {
                anatomyCategory.textContent = info.tag;
                anatomyTitle.textContent = info.title;
                anatomyDescription.textContent = info.desc;
                anatomyAdvice.textContent = info.advice;
            }
        });
    });

    if (anatomyCloseBtn) {
        anatomyCloseBtn.addEventListener("click", () => {
            hotspots.forEach(s => s.classList.remove("active"));
            anatomyCategory.textContent = "HỆ THỐNG Y KHOA AN ĐỨC 6";
            anatomyTitle.textContent = "Chạm vào các bộ phận trên mô hình";
            anatomyDescription.textContent = "Khám phá thông tin chi tiết về từng hệ cơ quan bằng cách click vào các vòng tròn phát sáng trên ảnh mô hình 3D bên cạnh.";
            anatomyAdvice.textContent = "Chủ động tra cứu giúp bạn hiểu rõ hơn về tình trạng sức khỏe của cơ thể mỗi ngày.";
        });
    }
});
