/* =========================================================
   NHÀ THUỐC AN ĐỨC 6 - WEBSITE INTERACTION (HOÀN CHỈNH)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const categoryLabels = {
        thuc_pham: "Thực phẩm bổ sung",
        dung_cu: "Dụng cụ y tế",
        my_pham: "Mỹ phẩm",
    };

    /* =====================================================
       1. HEADER SCROLL
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
       2. MOBILE MENU
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
       3. ACTIVE NAVIGATION
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

            navigationLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        });

    }, observerOptions);

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* =====================================================
       4. PRODUCT MODAL & GRID SYSTEM
       ===================================================== */
    const productGrid = document.getElementById("productGrid");
    const productModal = document.getElementById("productModal");

    const modalProductImage =
        document.getElementById("modalProductImage");

    const modalProductImageWrap =
        document.getElementById("modalProductImageWrap");

    const modalProductName =
        document.getElementById("modalProductName");

    const modalProductCategory =
        document.getElementById("modalProductCategory");

    const modalProductDescription =
        document.getElementById("modalProductDescription");

    const modalIngredients =
        document.getElementById("modalIngredients");

    const modalBenefits =
        document.getElementById("modalBenefits");

    const modalUsage =
        document.getElementById("modalUsage");

    const modalUsers =
        document.getElementById("modalUsers");

    const modalNote =
        document.getElementById("modalNote");


    function setDetail(element, value) {

        if (!element) return;

        const paragraph = element.querySelector("p");

        if (!value || !String(value).trim()) {

            element.style.display = "none";
            return;

        }

        element.style.display = "";

        if (paragraph) {
            paragraph.innerHTML = value;
        }
    }


    function createProductCard(product) {

        const card = document.createElement("a");

        card.href = (window.PRODUCT_URLS && window.PRODUCT_URLS[product.id]) || "#";
        card.className = "product-card";
        card.dataset.productId = product.id;

        card.setAttribute(
            "aria-label",
            `Xem thông tin ${product.name}`
        );


        const title = document.createElement("h3");
        title.className = "card-title-elegant";
        title.textContent = product.name;


        const imageBox = document.createElement("div");
        imageBox.className = "product-image-box";


        const image = document.createElement("img");

        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";


        imageBox.appendChild(image);

        if (product.isNew) {
            const badge = document.createElement("span");
            badge.className = "card-badge";
            badge.textContent = "Mới";
            imageBox.appendChild(badge);
        }


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

        card.appendChild(title);
        card.appendChild(imageBox);
        card.appendChild(footer);

        /* Nút thêm vào danh sách báo giá (xử lý bởi gio-hang.js) */
        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "agh-add agh-add--card";
        addBtn.textContent = "+ Thêm vào danh sách báo giá";
        addBtn.dataset.addToCart = product.id;
        addBtn.dataset.name = product.name.split(/\s[–—-]\s/)[0];
        addBtn.dataset.image = product.image;
        addBtn.dataset.url = (window.PRODUCT_URLS && window.PRODUCT_URLS[product.id]) || "";
        card.appendChild(addBtn);


        return card;
    }


    let currentPage = 1;
    const itemsPerPage = 4;
    let currentProductsList = [];


    function renderProducts(reset = false) {

        if (!productGrid) return;
        if (typeof products === "undefined") return;


        if (reset) {
            productGrid.innerHTML = "";
        }


        const limit = currentPage * itemsPerPage;

        const startIndex =
            (currentPage - 1) * itemsPerPage;


        const productsToRender =
            currentProductsList.slice(startIndex, limit);


        productsToRender.forEach((product) => {

            const card = createProductCard(product);

            card.classList.add("reveal", "visible");

            productGrid.appendChild(card);

        });


        const loadMoreContainer =
            document.getElementById("loadMoreContainer");


        if (loadMoreContainer) {

            loadMoreContainer.style.display =
                currentProductsList.length > limit
                    ? "block"
                    : "none";

        }
    }


    if (typeof products !== "undefined") {

        currentProductsList = [...products];

        renderProducts(true);

    }


    const loadMoreBtn =
        document.getElementById("loadMoreBtn");


    if (loadMoreBtn) {

        loadMoreBtn.addEventListener("click", () => {

            currentPage++;

            renderProducts(false);

        });

    }


    const searchInput =
        document.getElementById("productSearchInput");


    if (searchInput) {

        searchInput.addEventListener("input", (e) => {

            const keyword =
                e.target.value.toLowerCase().trim();


            if (keyword === "") {

                currentProductsList = [...products];

            } else {

                currentProductsList =
                    products.filter(product =>

                        product.name
                            .toLowerCase()
                            .includes(keyword)

                        ||

                        (
                            product.category &&
                            product.category
                                .toLowerCase()
                                .includes(keyword)
                        )

                    );

            }


            if (currentProductsList.length === 0) {

                productGrid.innerHTML = `
                    <p style="
                        grid-column: 1 / -1;
                        text-align: center;
                        color: var(--text-light);
                        padding: 30px;
                    ">
                        Không tìm thấy sản phẩm phù hợp với từ khóa "${keyword}".
                    </p>
                `;


                const loadMoreContainer =
                    document.getElementById("loadMoreContainer");


                if (loadMoreContainer) {
                    loadMoreContainer.style.display = "none";
                }

            } else {

                currentPage = 1;

                renderProducts(true);

            }

        });

    }


    function openProductModal(product) {

        if (!productModal || !product) return;


        if (modalProductName) {
            modalProductName.textContent = product.name;
        }


        if (modalProductCategory) {
            modalProductCategory.textContent =
                product.category || "";
        }


        if (modalProductImage && product.image) {

            modalProductImage.src = product.image;
            modalProductImage.alt = product.name;

            if (modalProductImageWrap) {
                modalProductImageWrap.style.display = "";
            }

        } else if (modalProductImageWrap) {

            modalProductImageWrap.style.display = "none";

        }


        if (modalProductDescription) {
            modalProductDescription.innerHTML =
                product.description || "";
        }


        const details = product.details || {};


        setDetail(
            modalIngredients,
            details.ingredients
        );

        setDetail(
            modalBenefits,
            details.benefits
        );

        setDetail(
            modalUsage,
            details.usage
        );

        setDetail(
            modalUsers,
            details.users
        );

        const defaultNotes = {
            thuc_pham: "Thực phẩm bảo vệ sức khỏe không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Hiệu quả tùy thuộc cơ địa mỗi người. Hãy đọc kỹ nhãn sản phẩm và hỏi ý kiến bác sĩ/dược sĩ trước khi dùng.",
            my_pham: "Sản phẩm dùng ngoài da. Ngưng sử dụng nếu có dấu hiệu kích ứng và hỏi ý kiến bác sĩ da liễu nếu cần.",
            dung_cu: "Thiết bị hỗ trợ theo dõi tại nhà, không thay thế chẩn đoán của bác sĩ. Kết quả đo có thể thay đổi theo thời điểm và tư thế đo."
        };

        setDetail(
            modalNote,
            details.note || defaultNotes[product.category] || ""
        );


        productModal.classList.add("open");

        productModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";
    }


    function closeProductModal() {

        if (!productModal) return;


        productModal.classList.remove("open");

        productModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";
    }


    if (productGrid) {

        productGrid.addEventListener("click", (event) => {

            const card =
                event.target.closest(".product-card");


            if (!card) return;


            // Có trang riêng thì để trình duyệt chuyển trang bình thường
            if (card.getAttribute("href") && card.getAttribute("href") !== "#") return;

            event.preventDefault();


            const productId =
                card.dataset.productId;


            if (typeof products === "undefined") return;


            const product =
                products.find(
                    (item) => item.id === productId
                );


            if (product) {
                openProductModal(product);
            }

        });

    }


    const closeModalButtons =
        document.querySelectorAll("[data-close-modal]");


    closeModalButtons.forEach((button) => {

        button.addEventListener(
            "click",
            closeProductModal
        );

    });


    /* =====================================================
       5. 3D ANATOMY INTERACTIVE
       ===================================================== */
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


    const hotspots =
        document.querySelectorAll(".anatomy-hotspot");

    const anatomyCategory =
        document.getElementById("anatomyCategory");

    const anatomyTitle =
        document.getElementById("anatomyTitle");

    const anatomyDescription =
        document.getElementById("anatomyDescription");

    const anatomyAdvice =
        document.getElementById("anatomyAdvice");

    const anatomyCloseBtn =
        document.getElementById("anatomyCloseBtn");


    hotspots.forEach(spot => {

        spot.addEventListener("click", () => {

            hotspots.forEach(s => {
                s.classList.remove("active");
            });

            spot.classList.add("active");


            const organKey =
                spot.dataset.organ;


            const info =
                medicalOrganData[organKey];


            if (info && anatomyTitle) {

                anatomyCategory.textContent =
                    info.tag;

                anatomyTitle.textContent =
                    info.title;

                anatomyDescription.textContent =
                    info.desc;

                anatomyAdvice.textContent =
                    info.advice;

            }

        });

    });


    if (anatomyCloseBtn) {

        anatomyCloseBtn.addEventListener("click", () => {

            hotspots.forEach(s => {
                s.classList.remove("active");
            });


            anatomyCategory.textContent =
                "HỆ THỐNG Y KHOA AN ĐỨC 6";


            anatomyTitle.textContent =
                "Chạm vào các bộ phận trên mô hình";


            anatomyDescription.textContent =
                "Khám phá thông tin chi tiết về từng hệ cơ quan bằng cách click vào các vòng tròn phát sáng trên ảnh mô hình 3D bên cạnh.";


            anatomyAdvice.textContent =
                "Chủ động tra cứu giúp bạn hiểu rõ hơn về tình trạng sức khỏe của cơ thể mỗi ngày.";

        });

    }


    /* =====================================================
       6. ABOUT US - HOVER EFFECT
       GHI CHÚ TỐI ƯU: đã xoá đoạn code cũ tìm ".feature-item" /
       "#aboutDynamicImg" vì index.html KHÔNG có phần tử nào mang các
       id/class này (khu vực "Về chúng tôi" hiện dùng bố cục bento-grid
       ở dưới, không cần hiệu ứng đổi ảnh khi hover). Đây là code chết
       còn sót từ bản thiết kế cũ, không ảnh hưởng gì khi xoá.
       ===================================================== */
});

// =========================
// NÚT VỀ ĐẦU TRANG
// =========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* Tạm dừng mô hình chuyển động ở phần giới thiệu khi nằm ngoài màn hình (đỡ tốn pin/CPU) */
(function () {
    var viz = document.querySelector(".hero-viz");
    if (!viz || !("IntersectionObserver" in window)) return;
    new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            viz.classList.toggle("is-offscreen", !e.isIntersecting);
        });
    }, { threshold: 0.05 }).observe(viz);
})();

/* Hiển thị "Đang mở cửa / Đã đóng cửa" theo giờ Việt Nam (mở 06:00 - 22:00) */
(function () {
    var el = document.getElementById("locationStatus");
    if (!el) return;
    function update() {
        var h, m;
        try {
            var parts = new Intl.DateTimeFormat("en-GB", {
                timeZone: "Asia/Ho_Chi_Minh", hour: "2-digit", minute: "2-digit", hour12: false
            }).formatToParts(new Date());
            parts.forEach(function (p) {
                if (p.type === "hour") h = parseInt(p.value, 10) % 24;
                if (p.type === "minute") m = parseInt(p.value, 10);
            });
        } catch (e) {
            var d = new Date();
            h = d.getHours();
            m = d.getMinutes();
        }
        var mins = h * 60 + m;
        var open = mins >= 6 * 60 && mins < 22 * 60;
        el.textContent = open ? "Đang mở cửa" : "Đã đóng cửa";
        el.classList.toggle("is-closed", !open);
    }
    update();
    setInterval(update, 60000);
})();

/* Trên điện thoại: khóa bản đồ cho đến khi chạm vào, để vuốt cuộn trang không bị bản đồ chặn */
(function () {
    var map = document.querySelector(".location-map");
    if (!map || !window.matchMedia || !window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    map.classList.add("is-locked");
    map.addEventListener("click", function () { map.classList.remove("is-locked"); });
    document.addEventListener("touchstart", function (e) {
        if (!map.contains(e.target)) map.classList.add("is-locked");
    }, { passive: true });
})();