/* =========================================================
   NHÀ THUỐC AN ĐỨC 6
   BLOG.JS

   =========================================================
   HƯỚNG DẪN SỬ DỤNG:

   SAU NÀY CHỈ CẦN SỬA PHẦN:
   "DỮ LIỆU BÀI VIẾT"

   Không cần sửa phần:
   - BLOG RENDER
   - BLOG VIEWER
   - BLOG EVENT
   - BLOG CSS

   ========================================================= */


/* =========================================================
   1. DỮ LIỆU BÀI VIẾT
   =========================================================
   
   Đây là PHẦN DUY NHẤT bạn cần chỉnh sửa sau này.
   
   Mỗi bài gồm:
   
   id       = mã bài, KHÔNG được trùng
   category = chuyên mục
   title    = tiêu đề
   image    = đường dẫn ảnh
   excerpt  = mô tả ngắn ngoài trang chủ
   content  = nội dung đầy đủ khi bấm vào bài
   
   ========================================================= */

const blogs = [

    /* =====================================================
       BÀI VIẾT 1
       ===================================================== */

    {
        id: "bai-viet-1",

        category: "Dinh dưỡng",

        title: "Cholesterol: Những điều cần biết về mỡ máu",

        image: "images/Su_that_ve_cholesterol.webp",

        excerpt: "Tìm hiểu cholesterol là gì, vì sao cần theo dõi và những thói quen ăn uống, vận động thường được khuyến nghị.",

        content: `
            <p>
                Cholesterol thường bị hiểu lầm là một chất hoàn toàn có hại.
                Tuy nhiên, thực tế cơ thể chúng ta rất cần cholesterol để xây dựng
                các tế bào khỏe mạnh, tạo thành màng tế bào, và tổng hợp một số
                hormone thiết yếu cũng như vitamin D.
            </p>

            <h3>Cholesterol có 2 loại chính:</h3>

            <ul>
                <li>
                    <strong>LDL (Cholesterol xấu):</strong>
                    Dễ bám vào thành mạch máu, tạo thành các mảng xơ vữa,
                    dẫn đến nguy cơ đột quỵ và nhồi máu cơ tim.
                </li>

                <li>
                    <strong>HDL (Cholesterol tốt):</strong>
                    Hoạt động như một "người dọn rác", mang cholesterol dư thừa
                    từ các cơ quan về gan để đào thải.
                </li>
            </ul>

            <h3>Làm thế nào để hạ LDL và tăng HDL?</h3>

            <p>
                <strong>1. Thay đổi chất béo:</strong>
                Hạn chế mỡ động vật, bơ, nội tạng. Tăng cường chất béo tốt
                từ dầu oliu, quả bơ, các loại hạt, và đặc biệt là Omega-3
                từ cá hồi, cá trích.
            </p>

            <p>
                <strong>2. Tăng cường chất xơ hòa tan:</strong>
                Yến mạch, đậu, trái cây như táo và lê giúp hỗ trợ kiểm soát
                lượng cholesterol trong chế độ ăn.
            </p>

            <p>
                <strong>3. Vận động thường xuyên:</strong>
                Duy trì hoạt động thể chất thường xuyên như đi bộ nhanh,
                đạp xe hoặc các hình thức vận động phù hợp.
            </p>

            <p class="blog-highlight">
                <em>
                    💡 Lưu ý:
                    Nên đi khám sức khỏe và xét nghiệm mỡ máu định kỳ
                    để theo dõi các chỉ số phù hợp với tình trạng sức khỏe.
                </em>
            </p>
        `
    },


    /* =====================================================
       BÀI VIẾT 2
       ===================================================== */

    {
        id: "bai-viet-2",

        category: "Bệnh lý",

        title: "Phân biệt triệu chứng thường gặp với các dấu hiệu cảnh báo cần đi khám sớm.",

        image: "images/Trao_nguoc_da_day.webp",

        excerpt: "Phân biệt các triệu chứng đau dạ dày thông thường và dấu hiệu cảnh báo viêm loét nặng. Các loại thuốc không kê đơn có thực sự hiệu quả?",

        content: `
            <p>
                Đau dạ dày và trào ngược dạ dày thực quản (GERD) là những
                tình trạng tiêu hóa rất phổ biến trong nhịp sống hiện đại,
                nguyên nhân có thể liên quan đến nhiều yếu tố khác nhau.
            </p>

            <h3>Các triệu chứng thông thường:</h3>

            <ul>
                <li>
                    Ợ hơi, ợ chua thường xuyên, đặc biệt sau khi ăn no
                    hoặc khi nằm.
                </li>

                <li>
                    Cảm giác nóng rát vùng ngực (heartburn)
                    dọc theo xương ức.
                </li>

                <li>
                    Đau âm ỉ hoặc quặn thắt vùng thượng vị.
                </li>
            </ul>

            <h3>Khi nào cần gặp bác sĩ ngay lập tức?</h3>

            <p>
                Nếu xuất hiện các triệu chứng cảnh báo dưới đây,
                nên ngừng tự điều trị kéo dài và đi khám để được đánh giá.
            </p>

            <ul>
                <li>
                    <strong>Sụt cân không rõ nguyên nhân:</strong>
                    Có thể là dấu hiệu cần được kiểm tra thêm.
                </li>

                <li>
                    <strong>Khó nuốt, nuốt nghẹn:</strong>
                    Cần được đánh giá nguyên nhân.
                </li>

                <li>
                    <strong>Nôn ra máu hoặc đi ngoài phân đen:</strong>
                    Có thể là dấu hiệu xuất huyết tiêu hóa.
                </li>

                <li>
                    <strong>Đau bụng dữ dội, đột ngột:</strong>
                    Cần được thăm khám kịp thời.
                </li>
            </ul>

            <h3>Sử dụng thuốc không kê đơn (OTC)</h3>

            <p>
                Một số thuốc không kê đơn có thể giúp giảm triệu chứng
                trong thời gian ngắn. Tuy nhiên, không nên tự sử dụng
                kéo dài mà không được nhân viên y tế tư vấn.
            </p>
              <p>
      Người đang mang thai, cho con bú, có bệnh nền hoặc đang dùng thuốc khác
      nên hỏi bác sĩ hoặc dược sĩ trước khi dùng bất kỳ thuốc nào.
  </p>
        `
    },


    /* =====================================================
       BÀI VIẾT 3
       ===================================================== */

    {
        id: "bai-viet-3",

        category: "Mẹo sức khỏe",

        title: "Vitamin C: Cách dùng phù hợp và những lưu ý",

        image: "images/Su_dung_vitamin_c.webp",

        excerpt: "Nên uống vào lúc nào, cần bao nhiêu mỗi ngày và khi nào không nên dùng quá liều?",

        content: `
            <p>
                  <p>
                Vitamin C là vi chất cần thiết, tham gia vào chức năng miễn dịch bình thường,
                tác dụng chống oxy hóa và quá trình tạo collagen. Con người không tự tổng hợp
                được vitamin C và chỉ dự trữ một lượng hạn chế, nên cần nhận đủ từ thực phẩm
                hằng ngày, chủ yếu là rau củ và trái cây.
            </p>
            </p>

            <h3>Nên uống Vitamin C vào thời điểm nào?</h3>

            <p>
                Vitamin C tan trong nước. Nếu uống lúc đói gây khó chịu cho
                dạ dày, có thể sử dụng sau bữa ăn để dễ dung nạp hơn.
            </p>

            <p>
                Với những người có dạ dày nhạy cảm, nên uống sau bữa ăn
                để tránh cảm giác cồn cào hoặc khó chịu.
            </p>

            <h3>Liều lượng bao nhiêu là đủ?</h3>

            <ul>
                <li>
                    <strong>Người lớn khỏe mạnh:</strong>
                    Nhu cầu Vitamin C thay đổi tùy theo tuổi, giới tính
                    và tình trạng dinh dưỡng.
                </li>

                <li>
                    <strong>Khi cần bổ sung:</strong>
                    Nên sử dụng theo hướng dẫn trên sản phẩm hoặc
                    theo tư vấn của nhân viên y tế.
                </li>

                <li>
                    <strong>Không nên lạm dụng:</strong>
                    Việc sử dụng liều cao kéo dài không phải lúc nào
                    cũng mang lại lợi ích và có thể làm tăng nguy cơ
                    gặp tác dụng không mong muốn.
                </li>
            </ul>

            <p class="blog-highlight">
                <em>
                    💡 Mẹo nhỏ:
                    Nếu sử dụng thực phẩm bổ sung Vitamin C,
                    hãy đọc kỹ hướng dẫn sử dụng và duy trì chế độ ăn
                    đa dạng với rau củ, trái cây.
                </em>
            </p>
        `
    }

];


/* =========================================================
   2. BLOG RENDER
   =========================================================
   
   KHÔNG CẦN SỬA PHẦN NÀY.
   
   Code tự lấy dữ liệu ở phía trên và tạo các bài viết
   trên trang chủ.
   
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const blogGrid =
        document.getElementById("blogGrid");

    if (!blogGrid) {
        return;
    }


    /* -----------------------------------------------------
       XÓA NỘI DUNG CŨ
       ----------------------------------------------------- */

    blogGrid.innerHTML = "";


    /* -----------------------------------------------------
       TẠO CÁC THẺ BÀI VIẾT
       ----------------------------------------------------- */

    blogs.forEach(function (blog) {

        const card =
            document.createElement("article");

        card.className =
            "blog-card reveal visible";

        card.style.cursor =
            "pointer";

        card.dataset.blogId =
            blog.id;


        card.innerHTML = `
            <div class="blog-thumbnail">

                <img
                    src="${blog.image}"
                    alt="${blog.title}"
                    loading="lazy"
                >

            </div>


            <div class="blog-content">

                <span class="blog-category">
                    ${blog.category}
                </span>


                <h3 class="blog-title">
                    ${blog.title}
                </h3>


                <p class="blog-excerpt">
                    ${blog.excerpt}
                </p>

            </div>
        `;


        blogGrid.appendChild(card);

    });


    /* =====================================================
       3. TẠO CỬA SỔ ĐỌC BÀI
       ===================================================== */

    const blogViewer =
        document.createElement("div");

    blogViewer.id =
        "blogViewer";


    blogViewer.innerHTML = `

        <div class="blog-viewer-overlay"></div>


        <div class="blog-viewer-box">

            <button
                type="button"
                class="blog-viewer-close"
                aria-label="Đóng"
            >
                ×
            </button>


            <span class="blog-viewer-category"></span>


            <h2 class="blog-viewer-title"></h2>


            <div class="blog-viewer-image">

                <img
                    src=""
                    alt=""
                >

            </div>


            <div class="blog-viewer-content"></div>

        </div>

    `;


    document.body.appendChild(
        blogViewer
    );


    /* -----------------------------------------------------
       LẤY CÁC PHẦN TỬ TRONG VIEWER
       ----------------------------------------------------- */

    const overlay =
        blogViewer.querySelector(
            ".blog-viewer-overlay"
        );

    const closeButton =
        blogViewer.querySelector(
            ".blog-viewer-close"
        );

    const viewerCategory =
        blogViewer.querySelector(
            ".blog-viewer-category"
        );

    const viewerTitle =
        blogViewer.querySelector(
            ".blog-viewer-title"
        );

    const viewerImage =
        blogViewer.querySelector(
            ".blog-viewer-image img"
        );

    const viewerContent =
        blogViewer.querySelector(
            ".blog-viewer-content"
        );


    /* =====================================================
       4. HÀM MỞ BÀI
       ===================================================== */

    function openBlog(blog) {

        if (!blog) {
            return;
        }


        viewerCategory.textContent =
            blog.category;


        viewerTitle.textContent =
            blog.title;


        viewerImage.src =
            blog.image;


        viewerImage.alt =
            blog.title;


        var metaParts = [];
        if (blog.author)   metaParts.push("<span>Biên soạn: " + blog.author + "</span>");
        if (blog.reviewer) metaParts.push("<span>Thẩm định: " + blog.reviewer + "</span>");
        if (blog.updated)  metaParts.push("<span>Cập nhật: " + blog.updated + "</span>");

        var metaHtml = metaParts.length
            ? '<div class="blog-meta">' + metaParts.join("") + "</div>"
            : "";

        var sourcesHtml = (blog.sources && blog.sources.length)
            ? '<div class="blog-sources"><h3>Nguồn tham khảo</h3><ol>' +
              blog.sources.map(function (s) { return "<li>" + s + "</li>"; }).join("") +
              "</ol></div>"
            : "";

        var disclaimerHtml =
            '<p class="blog-disclaimer">Bài viết chỉ mang tính tham khảo, không thay thế tư vấn, chẩn đoán hay điều trị của bác sĩ.</p>';

        viewerContent.innerHTML = metaHtml + blog.content + sourcesHtml + disclaimerHtml;


        blogViewer.classList.add(
            "open"
        );


        document.body.style.overflow =
            "hidden";
    }


    /* =====================================================
       5. HÀM ĐÓNG BÀI
       ===================================================== */

    function closeBlog() {

        blogViewer.classList.remove(
            "open"
        );


        document.body.style.overflow =
            "";
    }


    /* =====================================================
       6. CLICK VÀO BÀI
       ===================================================== */

    blogGrid.addEventListener(
        "click",
        function (event) {

            const card =
                event.target.closest(
                    ".blog-card"
                );


            if (!card) {
                return;
            }


            const blog =
                blogs.find(function (item) {

                    return (
                        item.id ===
                        card.dataset.blogId
                    );

                });


            if (!blog) {
                return;
            }


            openBlog(blog);

        }
    );


    /* =====================================================
       7. NÚT ĐÓNG
       ===================================================== */

    closeButton.addEventListener(
        "click",
        closeBlog
    );


    overlay.addEventListener(
        "click",
        closeBlog
    );


    /* =====================================================
       8. PHÍM ESC
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                blogViewer.classList.contains("open")
            ) {

                closeBlog();

            }

        }
    );

});


/* =========================================================
   9. CSS RIÊNG CHO BLOG VIEWER
   =========================================================
   
   KHÔNG CẦN SỬA.
   ========================================================= */

const blogStyle =
    document.createElement("style");


blogStyle.textContent = `

    #blogViewer {

        position: fixed;

        inset: 0;

        z-index: 999999;

        display: flex;

        align-items: center;

        justify-content: center;

        padding: 20px;

        box-sizing: border-box;

        background: rgba(0, 0, 0, .65);

        opacity: 0;

        visibility: hidden;

        pointer-events: none;

        transition:
            opacity .2s ease,
            visibility .2s ease;
    }


    #blogViewer.open {

        opacity: 1;

        visibility: visible;

        pointer-events: auto;
    }


    .blog-viewer-overlay {

        position: absolute;

        inset: 0;
    }


    .blog-viewer-box {

        position: relative;

        z-index: 2;

        width: min(850px, 100%);

        max-height: 90vh;

        overflow-y: auto;

        background: #ffffff;

        border-radius: 24px;

        padding: 45px;

        box-sizing: border-box;

        box-shadow:
            0 25px 70px rgba(0, 0, 0, .30);
    }


    .blog-viewer-close {

        position: absolute;

        top: 18px;

        right: 18px;

        width: 42px;

        height: 42px;

        border-radius: 50%;

        border: 1px solid #ddd;

        background: #fff;

        color: #173820;

        font-size: 28px;

        line-height: 1;

        cursor: pointer;

        transition:
            background .2s ease,
            transform .2s ease;
    }


    .blog-viewer-close:hover {

        transform: rotate(90deg);
    }


    .blog-viewer-category {

        display: inline-block;

        padding: 6px 14px;

        margin-bottom: 16px;

        border-radius: 20px;

        background: #dbe4c2;

        color: #173820;

        font-size: 11px;

        font-weight: 700;

        text-transform: uppercase;
    }


    .blog-viewer-title {

        margin: 0 0 30px;

        font-family:
            'Playfair Display',
            Georgia,
            serif;

        font-size:
            clamp(28px, 4vw, 38px);

        line-height: 1.3;

        color: #173820;
    }


    .blog-viewer-image {

        width: 100%;

        height: 350px;

        margin-bottom: 30px;

        overflow: hidden;

        border-radius: 20px;

        background: #f8faf6;
    }


    .blog-viewer-image img {

        width: 100%;

        height: 100%;

        display: block;

        object-fit: cover;
    }


    .blog-viewer-content {

        color: #4a5c50;

        font-size: 16px;

        line-height: 1.8;

        text-align: justify;
    }


    .blog-viewer-content h3 {

        margin-top: 30px;

        margin-bottom: 15px;

        color: #173820;

        font-family:
            'Inter',
            sans-serif;

        font-size: 18px;
    }


    .blog-viewer-content p {

        margin-bottom: 18px;
    }


    .blog-viewer-content ul {

        padding-left: 25px;

        margin-bottom: 20px;
    }


    .blog-viewer-content li {

        margin-bottom: 10px;
    }


    .blog-viewer-content .blog-highlight {

        margin-top: 25px;

        padding: 18px 24px;

        background: #eef5e9;

        border: 1px solid #dce8d5;

        border-radius: 16px;

        color: #1a4d2e;

        text-align: left;
    }


    @media (max-width: 700px) {

        .blog-viewer-box {

            padding: 30px 20px;

            max-height: 92vh;
        }


        .blog-viewer-image {

            height: 220px;
        }


        .blog-viewer-title {

            font-size: 28px;
        }

    }

`;


document.head.appendChild(
    blogStyle
);