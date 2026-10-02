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

    title: "Cholesterol: Hiểu đúng về mỡ máu và cách kiểm soát LDL",

    image: "images/Su_that_ve_cholesterol.webp",

    excerpt: "Cholesterol là gì? LDL, HDL và triglyceride khác nhau thế nào? Cùng tìm hiểu cách đọc xét nghiệm mỡ máu và những thay đổi trong ăn uống, vận động có thể hỗ trợ kiểm soát cholesterol.",

    content: `
        <p>
            Khi nhắc đến "cholesterol" hay "mỡ máu", nhiều người thường nghĩ
            ngay đến một chất hoàn toàn có hại. Thực tế, cholesterol là một
            chất cần thiết cho cơ thể, tham gia vào cấu tạo màng tế bào và
            nhiều quá trình sinh học quan trọng.
        </p>

        <p>
            Vấn đề không nằm ở việc cơ thể có cholesterol, mà là
            <strong>lượng cholesterol trong máu và cách các loại lipoprotein
            vận chuyển cholesterol</strong>. Khi LDL cholesterol tăng cao,
            cholesterol có thể tích tụ trong thành động mạch và góp phần hình
            thành mảng xơ vữa, từ đó làm tăng nguy cơ mắc bệnh tim mạch và đột quỵ.
        </p>

        <p>
            Vì vậy, hiểu đúng các chỉ số LDL, HDL, triglyceride và cholesterol
            toàn phần sẽ giúp chúng ta chủ động hơn trong việc theo dõi sức khỏe.
        </p>

        <h3>1. Cholesterol là gì?</h3>

        <p>
            Cholesterol là một chất dạng sáp, giống chất béo, có trong mọi tế
            bào của cơ thể. Cơ thể sử dụng cholesterol cho nhiều chức năng,
            trong đó có việc duy trì cấu trúc tế bào và tạo ra một số hormone
            cùng các chất cần thiết khác.
        </p>

        <p>
            Cholesterol không hòa tan tốt trong máu nên cần được vận chuyển
            nhờ các hạt lipoprotein. Hai loại thường được nhắc đến nhất là
            <strong>LDL</strong> và <strong>HDL</strong>.
        </p>

        <p>
            Ngoài cholesterol, xét nghiệm mỡ máu còn thường bao gồm
            <strong>triglyceride</strong> - một dạng chất béo trong máu được
            cơ thể sử dụng để dự trữ và cung cấp năng lượng.
        </p>

        <h3>2. LDL, HDL và triglyceride khác nhau thế nào?</h3>

        <table class="blog-table">
            <thead>
                <tr>
                    <th>Chỉ số</th>
                    <th>Hiểu đơn giản</th>
                    <th>Vì sao cần quan tâm?</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>LDL-C</strong></td>
                    <td>Thường được gọi là "cholesterol xấu"</td>
                    <td>
                        LDL cao có thể góp phần hình thành mảng xơ vữa
                        trong động mạch và làm tăng nguy cơ tim mạch.
                    </td>
                </tr>

                <tr>
                    <td><strong>HDL-C</strong></td>
                    <td>Thường được gọi là "cholesterol tốt"</td>
                    <td>
                        HDL tham gia vận chuyển cholesterol từ các mô
                        trở về gan để xử lý.
                    </td>
                </tr>

                <tr>
                    <td><strong>Triglyceride</strong></td>
                    <td>Một dạng chất béo trong máu</td>
                    <td>
                        Triglyceride tăng cao, đặc biệt khi đi cùng
                        LDL cao hoặc HDL thấp, có liên quan đến nguy cơ
                        tim mạch cao hơn.
                    </td>
                </tr>

                <tr>
                    <td><strong>Cholesterol toàn phần</strong></td>
                    <td>Tổng lượng cholesterol trong máu theo cách tính của xét nghiệm</td>
                    <td>
                        Được sử dụng cùng các chỉ số khác để đánh giá
                        tình trạng lipid máu.
                    </td>
                </tr>
            </tbody>
        </table>

        <p class="blog-highlight">
            <em>
                💡 <strong>Điểm cần nhớ:</strong>
                Không nên chỉ nhìn vào một con số duy nhất. LDL, HDL,
                triglyceride và cholesterol toàn phần cần được xem cùng
                tuổi, tiền sử gia đình, huyết áp, hút thuốc, bệnh tiểu đường
                và các yếu tố nguy cơ tim mạch khác.
            </em>
        </p>

        <h3>3. Vì sao LDL cao lại đáng quan tâm?</h3>

        <p>
            LDL có nhiệm vụ vận chuyển cholesterol đến các mô trong cơ thể.
            Tuy nhiên, khi lượng LDL trong máu quá cao, cholesterol có thể
            tích tụ trong thành động mạch và góp phần hình thành
            <strong>mảng xơ vữa</strong>.
        </p>

        <p>
            Theo thời gian, quá trình này có thể làm lòng động mạch bị hẹp
            hoặc ảnh hưởng đến dòng máu. Xơ vữa động mạch có liên quan đến
            các bệnh tim mạch như bệnh mạch vành và đột quỵ.
        </p>

        <p>
            Vì vậy, LDL thường là một trong những chỉ số quan trọng được
            quan tâm khi đánh giá và quản lý nguy cơ tim mạch.
        </p>

        <h3>4. HDL có thực sự là "cholesterol tốt"?</h3>

        <p>
            HDL thường được gọi là "cholesterol tốt" vì HDL tham gia vận chuyển
            cholesterol từ máu và các mô trở lại gan để xử lý.
        </p>

        <p>
            Tuy nhiên, cách gọi "tốt - xấu" chỉ mang tính đơn giản hóa để
            dễ hiểu. <strong>Không nên hiểu rằng chỉ cần tăng HDL thật cao
            là có thể loại bỏ nguy cơ tim mạch do LDL.</strong>
        </p>

        <p>
            Trong thực tế, bác sĩ thường xem xét toàn bộ hồ sơ nguy cơ tim mạch
            thay vì chỉ tìm cách tăng một chỉ số riêng lẻ.
        </p>

        <h3>5. Triglyceride là gì?</h3>

        <p>
            Triglyceride là dạng chất béo phổ biến nhất trong cơ thể và là
            nguồn dự trữ năng lượng. Sau khi ăn, lượng năng lượng cơ thể chưa
            sử dụng có thể được chuyển thành triglyceride và dự trữ trong
            mô mỡ.
        </p>

        <p>
            Triglyceride tăng có thể liên quan đến chế độ ăn nhiều năng lượng,
            thừa cân hoặc béo phì, uống nhiều rượu, một số bệnh lý và yếu tố
            di truyền.
        </p>

        <p>
            Triglyceride cao đặc biệt đáng lưu ý khi đi kèm LDL cao hoặc HDL
            thấp vì sự kết hợp này có liên quan đến nguy cơ tim mạch cao hơn.
        </p>

        <h3>6. Bảng tham khảo nhanh các chỉ số mỡ máu</h3>

        <p>
            Dưới đây là một số mức thường được sử dụng để giúp người đọc
            hình dung kết quả xét nghiệm. Tuy nhiên, <strong>mục tiêu điều trị
            LDL không giống nhau ở tất cả mọi người</strong>. Người đã mắc
            bệnh tim mạch, tiểu đường hoặc có nguy cơ tim mạch cao có thể
            được bác sĩ đặt mục tiêu LDL thấp hơn.
        </p>

        <table class="blog-table">
            <thead>
                <tr>
                    <th>Chỉ số</th>
                    <th>Mức tham khảo thường gặp</th>
                    <th>Cần lưu ý</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>Cholesterol toàn phần</strong></td>
                    <td>Khoảng dưới 200 mg/dL</td>
                    <td>
                        Không nên đánh giá riêng lẻ.
                    </td>
                </tr>

                <tr>
                    <td><strong>LDL-C</strong></td>
                    <td>Khoảng 100 mg/dL</td>
                    <td>
                        Mục tiêu cụ thể phụ thuộc nguy cơ tim mạch.
                    </td>
                </tr>

                <tr>
                    <td><strong>HDL-C</strong></td>
                    <td>
                        ≥40 mg/dL ở nam<br>
                        ≥50 mg/dL ở nữ
                    </td>
                    <td>
                        Không nên chỉ tập trung vào việc tăng HDL.
                    </td>
                </tr>

                <tr>
                    <td><strong>Triglyceride</strong></td>
                    <td>Dưới 150 mg/dL</td>
                    <td>
                        Cần xem cùng LDL, HDL và các yếu tố nguy cơ khác.
                    </td>
                </tr>
            </tbody>
        </table>

        <p>
            <strong>Lưu ý về đơn vị:</strong> Một số phòng xét nghiệm tại Việt Nam
            sử dụng mmol/L thay vì mg/dL. Khi đọc kết quả, nên xem đúng đơn vị
            được ghi trên phiếu xét nghiệm và đối chiếu với khoảng tham chiếu
            của chính phòng xét nghiệm đó.
        </p>

        <h3>7. Mô hình đơn giản để hiểu kết quả mỡ máu</h3>

        <div class="blog-diagram">
            <div class="diagram-step">
                <strong>1. LDL</strong>
                <span>Đánh giá mức cholesterol LDL</span>
            </div>

            <div class="diagram-arrow">→</div>

            <div class="diagram-step">
                <strong>2. HDL</strong>
                <span>Xem xét cùng hồ sơ lipid</span>
            </div>

            <div class="diagram-arrow">→</div>

            <div class="diagram-step">
                <strong>3. Triglyceride</strong>
                <span>Đánh giá thêm chất béo trong máu</span>
            </div>

            <div class="diagram-arrow">→</div>

            <div class="diagram-step">
                <strong>4. Nguy cơ tổng thể</strong>
                <span>Xem cùng các yếu tố sức khỏe khác</span>
            </div>
        </div>

        <p class="blog-highlight">
            <em>
                💡 <strong>Đừng chỉ hỏi "Cholesterol của tôi có cao không?"</strong>
                Hãy xem toàn bộ bảng mỡ máu và các yếu tố nguy cơ tim mạch
                để hiểu kết quả có ý nghĩa gì đối với từng người.
            </em>
        </p>

        <h3>8. Những yếu tố có thể làm cholesterol mất cân bằng</h3>

        <p>
            Cholesterol trong máu chịu ảnh hưởng của nhiều yếu tố. Chế độ
            ăn uống và mức độ vận động đóng vai trò quan trọng, nhưng không
            phải là những yếu tố duy nhất.
        </p>

        <table class="blog-table">
            <thead>
                <tr>
                    <th>Yếu tố</th>
                    <th>Có thể ảnh hưởng như thế nào?</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Chế độ ăn nhiều chất béo bão hòa</td>
                    <td>
                        Có thể làm tăng LDL cholesterol.
                    </td>
                </tr>

                <tr>
                    <td>Ít vận động</td>
                    <td>
                        Có liên quan đến hồ sơ lipid không thuận lợi
                        và tăng nguy cơ thừa cân.
                    </td>
                </tr>

                <tr>
                    <td>Thừa cân hoặc béo phì</td>
                    <td>
                        Có thể liên quan đến LDL và triglyceride cao hơn
                        và HDL thấp hơn.
                    </td>
                </tr>

                <tr>
                    <td>Hút thuốc</td>
                    <td>
                        Có thể làm giảm HDL và làm tăng nguy cơ tổn thương
                        mạch máu.
                    </td>
                </tr>

                <tr>
                    <td>Tuổi và yếu tố di truyền</td>
                    <td>
                        Có thể ảnh hưởng đến mức cholesterol và nguy cơ
                        rối loạn lipid máu.
                    </td>
                </tr>

                <tr>
                    <td>Một số bệnh lý hoặc thuốc</td>
                    <td>
                        Có thể làm thay đổi cholesterol hoặc triglyceride.
                    </td>
                </tr>
            </tbody>
        </table>

        <h3>9. Ăn gì để hỗ trợ kiểm soát LDL?</h3>

        <p>
            Không có một món ăn đơn lẻ nào có thể "làm sạch mỡ máu". Thay vào đó,
            hiệu quả thường đến từ việc xây dựng một chế độ ăn tổng thể hợp lý,
            đặc biệt là giảm chất béo bão hòa và tăng các thực phẩm giàu chất xơ.
        </p>

        <h4>Nhóm nên ưu tiên</h4>

        <table class="blog-table">
            <thead>
                <tr>
                    <th>Nhóm thực phẩm</th>
                    <th>Ví dụ</th>
                    <th>Gợi ý</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>Chất xơ hòa tan</strong></td>
                    <td>Yến mạch, đậu, một số loại trái cây</td>
                    <td>
                        Tăng dần trong khẩu phần ăn và uống đủ nước.
                    </td>
                </tr>

                <tr>
                    <td><strong>Ngũ cốc nguyên hạt</strong></td>
                    <td>Yến mạch, gạo nguyên cám, bánh mì nguyên hạt</td>
                    <td>
                        Có thể thay thế một phần ngũ cốc tinh chế.
                    </td>
                </tr>

                <tr>
                    <td><strong>Rau và trái cây</strong></td>
                    <td>Rau xanh, táo, lê, cam, các loại quả</td>
                    <td>
                        Đa dạng nhiều loại trong ngày.
                    </td>
                </tr>

                <tr>
                    <td><strong>Các loại hạt</strong></td>
                    <td>Hạnh nhân, óc chó, hạt điều...</td>
                    <td>
                        Ưu tiên khẩu phần vừa phải, ít muối.
                    </td>
                </tr>

                <tr>
                    <td><strong>Chất béo không bão hòa</strong></td>
                    <td>Dầu thực vật, quả bơ, các loại hạt</td>
                    <td>
                        Dùng thay cho một phần chất béo bão hòa.
                    </td>
                </tr>

                <tr>
                    <td><strong>Cá</strong></td>
                    <td>Cá hồi, cá trích và các loại cá khác</td>
                    <td>
                        Là nguồn protein và chất béo không bão hòa phù hợp
                        trong chế độ ăn cân bằng.
                    </td>
                </tr>
            </tbody>
        </table>

        <h3>10. Những thực phẩm nên hạn chế</h3>

        <p>
            Một trong những thay đổi quan trọng khi muốn kiểm soát LDL là
            <strong>giảm lượng chất béo bão hòa</strong> trong chế độ ăn.
            NHLBI khuyến nghị mô hình ăn uống ưu tiên thực phẩm giàu chất xơ,
            ngũ cốc nguyên hạt, rau, trái cây, các loại đậu và chất béo không
            bão hòa thay cho những nguồn chất béo bão hòa. :contentReference[oaicite:1]{index=1}
        </p>

        <table class="blog-table">
            <thead>
                <tr>
                    <th>Nên hạn chế</th>
                    <th>Có thể thay bằng</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Thịt nhiều mỡ</td>
                    <td>Thịt nạc, cá, đậu và các nguồn protein phù hợp</td>
                </tr>

                <tr>
                    <td>Da và mỡ động vật</td>
                    <td>Cắt bỏ phần mỡ nhìn thấy khi chế biến</td>
                </tr>

                <tr>
                    <td>Bơ và thực phẩm nhiều chất béo bão hòa</td>
                    <td>Dùng lượng phù hợp chất béo không bão hòa</td>
                </tr>

                <tr>
                    <td>Đồ chiên rán thường xuyên</td>
                    <td>Luộc, hấp, nướng hoặc chế biến với lượng dầu phù hợp</td>
                </tr>

                <tr>
                    <td>Bánh ngọt, thực phẩm siêu chế biến</td>
                    <td>Trái cây, ngũ cốc nguyên hạt và thực phẩm ít chế biến hơn</td>
                </tr>
            </tbody>
        </table>

        <h3>11. Chất xơ hòa tan và cholesterol</h3>

        <p>
            Chất xơ hòa tan là một thành phần đáng chú ý trong chế độ ăn hỗ trợ
            kiểm soát cholesterol. Các nguồn thường gặp gồm yến mạch, các loại
            đậu và một số loại trái cây.
        </p>

        <p>
            Một chế độ ăn giàu chất xơ không chỉ nên tập trung vào một thực phẩm
            duy nhất. Thay vào đó, hãy tăng sự đa dạng của rau, trái cây,
            đậu và ngũ cốc nguyên hạt trong khẩu phần hằng ngày.
        </p>

        <p>
            NHLBI cũng đưa chất xơ hòa tan vào nhóm thay đổi dinh dưỡng có thể
            hỗ trợ giảm LDL cholesterol. :contentReference[oaicite:2]{index=2}
        </p>

        <h3>12. Omega-3 có làm giảm cholesterol không?</h3>

        <p>
            Omega-3 thường được nhắc đến khi nói về sức khỏe tim mạch, nhưng
            cần phân biệt giữa <strong>cholesterol</strong> và
            <strong>triglyceride</strong>.
        </p>

        <p>
            Một số dạng omega-3 có tác động đáng kể đến triglyceride, trong khi
            việc kiểm soát LDL lại liên quan nhiều đến tổng thể chế độ ăn,
            cân nặng, vận động và trong một số trường hợp là thuốc điều trị.
        </p>

        <p>
            Vì vậy, không nên hiểu rằng cứ bổ sung omega-3 là có thể thay thế
            cho việc kiểm soát LDL hoặc thay thế thuốc hạ cholesterol khi
            bác sĩ đã chỉ định.
        </p>

        <h3>13. Vận động có giúp cải thiện mỡ máu không?</h3>

        <p>
            Hoạt động thể chất thường xuyên có nhiều lợi ích đối với sức khỏe
            tim mạch. Vận động có thể giúp giảm triglyceride, hỗ trợ tăng HDL
            và góp phần kiểm soát cân nặng. :contentReference[oaicite:3]{index=3}
        </p>

        <p>
            Không nhất thiết phải bắt đầu bằng những bài tập quá nặng. Đi bộ
            nhanh, đạp xe, bơi, tập sức mạnh hoặc những hoạt động thể chất
            phù hợp với thể trạng đều có thể trở thành một phần của lối sống
            năng động.
        </p>

        <p>
            Nếu đang có bệnh tim mạch, bệnh mạn tính hoặc đã lâu không vận động,
            nên trao đổi với nhân viên y tế để lựa chọn mức độ vận động phù hợp.
        </p>

        <h3>14. Mô hình "4 thay đổi" để chăm sóc mỡ máu</h3>

        <div class="blog-diagram">
            <div class="diagram-step">
                <strong>🥗 Ăn hợp lý</strong>
                <span>Giảm chất béo bão hòa, tăng rau và chất xơ</span>
            </div>

            <div class="diagram-step">
                <strong>🚶 Vận động</strong>
                <span>Duy trì hoạt động thể chất thường xuyên</span>
            </div>

            <div class="diagram-step">
                <strong>⚖️ Kiểm soát cân nặng</strong>
                <span>Duy trì cân nặng phù hợp với thể trạng</span>
            </div>

            <div class="diagram-step">
                <strong>🩺 Theo dõi</strong>
                <span>Kiểm tra mỡ máu và trao đổi với nhân viên y tế</span>
            </div>
        </div>

        <p class="blog-highlight">
            <em>
                💡 <strong>Không cần thay đổi tất cả trong một ngày.</strong>
                Một chế độ ăn hợp lý, vận động đều đặn và theo dõi sức khỏe
                lâu dài thường quan trọng hơn việc tìm kiếm một "thực phẩm
                thần kỳ" để giảm cholesterol.
            </em>
        </p>

        <h3>15. Khi nào cần dùng thuốc hạ cholesterol?</h3>

        <p>
            Không phải tất cả trường hợp cholesterol cao đều có thể hoặc cần
            xử lý chỉ bằng thay đổi chế độ ăn. Quyết định dùng thuốc phụ thuộc
            vào mức LDL, nguy cơ tim mạch tổng thể, bệnh lý đang mắc và tiền sử
            sức khỏe của từng người.
        </p>

        <p>
            Một số người có nguy cơ tim mạch cao có thể cần thuốc hạ lipid
            bên cạnh thay đổi lối sống. Vì vậy, nếu xét nghiệm cho thấy LDL
            tăng cao hoặc bạn có bệnh tim mạch, tiểu đường hay các yếu tố nguy
            cơ khác, nên trao đổi với bác sĩ thay vì tự mua thuốc.
        </p>

        <p>
            <strong>Không tự ý ngừng thuốc hạ cholesterol</strong> chỉ vì một
            lần xét nghiệm cho thấy chỉ số đã cải thiện. Việc thay đổi hoặc
            ngừng điều trị nên được trao đổi với bác sĩ.
        </p>

        <h3>16. Ai có nguy cơ cholesterol cao?</h3>

        <p>
            Một số yếu tố làm tăng khả năng có rối loạn cholesterol bao gồm:
        </p>

        <ul>
            <li>Chế độ ăn nhiều chất béo bão hòa hoặc chất béo chuyển hóa.</li>
            <li>Ít hoạt động thể chất.</li>
            <li>Thừa cân hoặc béo phì.</li>
            <li>Hút thuốc.</li>
            <li>Tuổi cao hơn.</li>
            <li>Tiền sử gia đình có cholesterol cao hoặc bệnh tim mạch sớm.</li>
            <li>Một số bệnh lý như đái tháo đường.</li>
            <li>Một số thuốc hoặc tình trạng sức khỏe khác.</li>
        </ul>

        <p>
            Đặc biệt, yếu tố di truyền có thể khiến một số người có cholesterol
            rất cao dù chế độ ăn và lối sống tương đối lành mạnh. Trong những
            trường hợp này, thay đổi lối sống vẫn quan trọng nhưng có thể không
            đủ để đưa LDL về mức mục tiêu.
        </p>

        <h3>17. Xét nghiệm mỡ máu cần quan tâm những gì?</h3>

        <p>
            Một bảng xét nghiệm lipid thường cung cấp các thông tin như
            cholesterol toàn phần, LDL-C, HDL-C và triglyceride. Bác sĩ có thể
            sử dụng những kết quả này cùng với tuổi, huyết áp, hút thuốc,
            bệnh tiểu đường, tiền sử gia đình và các yếu tố khác để đánh giá
            nguy cơ tim mạch.
        </p>

        <table class="blog-table">
            <thead>
                <tr>
                    <th>Kết quả</th>
                    <th>Không nên làm gì?</th>
                    <th>Nên làm gì?</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>LDL cao</td>
                    <td>Không tự kết luận chỉ do ăn mỡ.</td>
                    <td>
                        Xem xét chế độ ăn, lối sống và nguy cơ tim mạch tổng thể.
                    </td>
                </tr>

                <tr>
                    <td>HDL thấp</td>
                    <td>Không tự tìm cách tăng HDL bằng thực phẩm bổ sung.</td>
                    <td>
                        Tập trung vào lối sống lành mạnh và đánh giá toàn bộ hồ sơ lipid.
                    </td>
                </tr>

                <tr>
                    <td>Triglyceride cao</td>
                    <td>Không bỏ qua chỉ vì LDL không cao.</td>
                    <td>
                        Đánh giá chế độ ăn, cân nặng, rượu bia và các bệnh lý liên quan.
                    </td>
                </tr>

                <tr>
                    <td>Nhiều chỉ số bất thường</td>
                    <td>Không tự mua nhiều loại thực phẩm bổ sung cùng lúc.</td>
                    <td>
                        Trao đổi với bác sĩ hoặc dược sĩ để có hướng xử trí phù hợp.
                    </td>
                </tr>
            </tbody>
        </table>

        <h3>18. Những hiểu lầm thường gặp về cholesterol</h3>

        <div class="blog-myth">
            <p>
                <strong>❌ Hiểu lầm 1: "Cholesterol là chất xấu nên phải loại bỏ hoàn toàn."</strong>
            </p>

            <p>
                <strong>✔ Thực tế:</strong>
                Cơ thể cần cholesterol cho nhiều chức năng. Điều quan trọng là
                kiểm soát mức cholesterol và các yếu tố nguy cơ tim mạch phù hợp.
            </p>
        </div>

        <div class="blog-myth">
            <p>
                <strong>❌ Hiểu lầm 2: "Chỉ cần HDL cao là không lo bệnh tim."</strong>
            </p>

            <p>
                <strong>✔ Thực tế:</strong>
                HDL chỉ là một phần của hồ sơ lipid. LDL, triglyceride và các
                yếu tố nguy cơ khác vẫn cần được xem xét.
            </p>
        </div>

        <div class="blog-myth">
            <p>
                <strong>❌ Hiểu lầm 3: "Cholesterol cao chắc chắn do ăn trứng hoặc thịt."</strong>
            </p>

            <p>
                <strong>✔ Thực tế:</strong>
                Cholesterol máu chịu ảnh hưởng của nhiều yếu tố, bao gồm chế độ
                ăn, chất béo bão hòa, cân nặng, vận động, tuổi, di truyền,
                bệnh lý và một số thuốc.
            </p>
        </div>

        <div class="blog-myth">
            <p>
                <strong>❌ Hiểu lầm 4: "Uống omega-3 là đủ để xử lý mỡ máu."</strong>
            </p>

            <p>
                <strong>✔ Thực tế:</strong>
                Omega-3 và các sản phẩm bổ sung không thay thế cho chế độ ăn,
                vận động hoặc thuốc điều trị khi bác sĩ đã chỉ định.
            </p>
        </div>

        <h3>19. Câu hỏi thường gặp</h3>

        <h4>Cholesterol cao có triệu chứng không?</h4>

        <p>
            Cholesterol cao thường không gây ra triệu chứng rõ ràng. Nhiều
            người chỉ phát hiện thông qua xét nghiệm máu. Vì vậy, việc kiểm
            tra định kỳ theo nguy cơ cá nhân có ý nghĩa quan trọng.
        </p>

        <h4>LDL càng thấp có phải lúc nào cũng càng tốt?</h4>

        <p>
            LDL là một chỉ số quan trọng trong nguy cơ tim mạch, nhưng mục tiêu
            LDL không giống nhau ở tất cả mọi người. Người có nguy cơ tim mạch
            cao có thể được đặt mục tiêu thấp hơn người có nguy cơ thấp.
            Không nên tự đặt mục tiêu điều trị chỉ dựa trên một bảng tham khảo.
        </p>

        <h4>Ăn trứng có làm cholesterol tăng không?</h4>

        <p>
            Không nên đánh giá một thực phẩm đơn lẻ tách khỏi toàn bộ chế độ ăn.
            Khi quan tâm đến cholesterol, nên chú ý đặc biệt đến tổng thể chế độ
            ăn và lượng chất béo bão hòa, đồng thời cân nhắc khẩu phần phù hợp.
        </p>

        <h4>Đi bộ có giúp kiểm soát mỡ máu không?</h4>

        <p>
            Hoạt động thể chất thường xuyên có thể giúp cải thiện một số yếu tố
            liên quan đến lipid máu, trong đó có triglyceride và HDL, đồng thời
            hỗ trợ kiểm soát cân nặng và sức khỏe tim mạch.
        </p>

        <h4>Cholesterol cao có cần uống thuốc ngay không?</h4>

        <p>
            Không phải ai có cholesterol cao cũng có cùng chỉ định điều trị.
            Bác sĩ sẽ xem xét LDL, bệnh lý đang mắc, tiền sử tim mạch và các
            yếu tố nguy cơ khác trước khi quyết định có cần dùng thuốc hay không.
        </p>

        <h3>20. Tóm tắt: 5 điều nên nhớ về cholesterol</h3>

        <ol>
            <li>
                <strong>Cholesterol không hoàn toàn có hại:</strong>
                cơ thể cần cholesterol cho nhiều chức năng.
            </li>

            <li>
                <strong>LDL là chỉ số đặc biệt quan trọng:</strong>
                LDL cao có thể góp phần hình thành mảng xơ vữa.
            </li>

            <li>
                <strong>HDL và triglyceride cũng cần được xem xét:</strong>
                không nên đánh giá sức khỏe tim mạch chỉ dựa trên một chỉ số.
            </li>

            <li>
                <strong>Chế độ ăn và vận động có vai trò quan trọng:</strong>
                giảm chất béo bão hòa, tăng thực phẩm giàu chất xơ,
                duy trì hoạt động thể chất và cân nặng phù hợp.
            </li>

            <li>
                <strong>Xét nghiệm chỉ là một phần của bức tranh:</strong>
                mục tiêu kiểm soát cholesterol cần được cá nhân hóa theo
                nguy cơ tim mạch của mỗi người.
            </li>
        </ol>

        <p class="blog-highlight">
            <em>
                💡 <strong>Thông điệp cuối:</strong>
                Đừng chỉ quan tâm đến câu hỏi "mỡ máu có cao không?".
                Hãy tập trung vào việc hiểu LDL, HDL, triglyceride,
                các yếu tố nguy cơ và những thay đổi lối sống có thể duy trì
                lâu dài.
            </em>
        </p>

        <p>
            <strong>Thông tin trong bài viết nhằm mục đích giáo dục sức khỏe,
            không thay thế cho chẩn đoán, điều trị hoặc tư vấn trực tiếp
            từ bác sĩ và nhân viên y tế.</strong>
        </p>

        <h3>📚 Nguồn tham khảo</h3>

        <ul>
            <li>
                <strong>Centers for Disease Control and Prevention (CDC):</strong>
                About Cholesterol; LDL and HDL Cholesterol and Triglycerides.
            </li>

            <li>
                <strong>National Heart, Lung, and Blood Institute (NHLBI - NIH):</strong>
                Blood Cholesterol - Causes and Risk Factors.
            </li>

            <li>
                <strong>National Heart, Lung, and Blood Institute (NHLBI - NIH):</strong>
                Blood Cholesterol - Treatment.
            </li>

            <li>
                <strong>National Heart, Lung, and Blood Institute (NHLBI - NIH):</strong>
                Therapeutic Lifestyle Changes (TLC).
            </li>

            <li>
                <strong>American Heart Association (AHA):</strong>
                HDL (Good), LDL (Bad) Cholesterol and Triglycerides.
            </li>
        </ul>
    `
},

    /* =====================================================
       BÀI VIẾT 2
       ===================================================== */

    {
    id: "bai-viet-2",

    category: "Bệnh lý",

    title: "Đau dạ dày, trào ngược: Phân biệt triệu chứng thường gặp và dấu hiệu cảnh báo",

    image: "images/Trao_nguoc_da_day.webp",

    excerpt: "Ợ chua, nóng rát, đau vùng thượng vị có thể gặp trong trào ngược, khó tiêu hoặc bệnh lý dạ dày. Tìm hiểu dấu hiệu cảnh báo cần đi khám và cách sử dụng thuốc không kê đơn an toàn.",

    content: `
        <p>
            Đau hoặc khó chịu ở vùng bụng trên, ợ hơi, ợ chua và cảm giác nóng rát
            sau khi ăn là những triệu chứng khá phổ biến. Tuy nhiên, các biểu hiện
            này không phải lúc nào cũng đồng nghĩa với "đau dạ dày" hay viêm loét
            dạ dày.
        </p>

        <p>
            Khó tiêu, trào ngược dạ dày - thực quản (GERD), viêm dạ dày và loét
            dạ dày - tá tràng có thể gây ra một số triệu chứng tương tự nhau.
            Vì vậy, việc nhận biết đặc điểm của từng nhóm triệu chứng và các dấu
            hiệu cảnh báo là rất quan trọng, đặc biệt khi có ý định tự sử dụng
            thuốc không kê đơn.
        </p>

        <h3>1. Đau dạ dày có phải lúc nào cũng là bệnh loét dạ dày?</h3>

        <p>
            Trong giao tiếp hằng ngày, "đau dạ dày" thường được dùng để mô tả
            cảm giác đau, nóng rát hoặc khó chịu ở vùng thượng vị. Tuy nhiên,
            đây là cách gọi triệu chứng chứ không phải một chẩn đoán cụ thể.
        </p>

        <p>
            Một số nguyên nhân có thể liên quan đến các triệu chứng này gồm
            khó tiêu, trào ngược dạ dày - thực quản, viêm dạ dày, loét dạ dày -
            tá tràng và một số bệnh lý khác của hệ tiêu hóa. Đau vùng bụng trên
            cũng có thể xuất hiện trong những tình trạng không bắt nguồn từ
            dạ dày.
        </p>

        <p>
            Vì vậy, nếu triệu chứng kéo dài, tái phát nhiều lần hoặc xuất hiện
            dấu hiệu bất thường, không nên chỉ dựa vào vị trí đau để tự kết luận
            mình đang bị viêm loét dạ dày.
        </p>

        <h3>2. Những triệu chứng thường gặp</h3>

        <p>
            Các triệu chứng dưới đây có thể gặp ở người bị khó tiêu, trào ngược
            hoặc một số bệnh lý dạ dày. Mức độ và biểu hiện có thể khác nhau
            giữa từng người.
        </p>

        <ul>
            <li>
                <strong>Ợ chua, ợ nóng:</strong>
                Cảm giác nóng rát có thể xuất hiện sau khi ăn, đặc biệt khi
                ăn nhiều hoặc nằm xuống ngay sau bữa ăn.
            </li>

            <li>
                <strong>Thức ăn hoặc dịch dạ dày trào lên:</strong>
                Có thể cảm nhận vị chua hoặc thức ăn trào ngược lên vùng
                cổ họng, miệng.
            </li>

            <li>
                <strong>Đau hoặc nóng rát vùng thượng vị:</strong>
                Có thể xuất hiện ở vùng bụng phía trên, giữa bụng, dưới xương ức.
            </li>

            <li>
                <strong>Đầy bụng, chướng bụng, ợ hơi:</strong>
                Thường đi kèm cảm giác khó chịu sau khi ăn.
            </li>

            <li>
                <strong>Buồn nôn hoặc nôn:</strong>
                Có thể xuất hiện trong nhiều tình trạng tiêu hóa khác nhau,
                vì vậy không thể dùng triệu chứng này để xác định nguyên nhân.
            </li>

            <li>
                <strong>Cảm giác nhanh no:</strong>
                Một số người cảm thấy no sớm hoặc khó chịu sau khi ăn một lượng
                thức ăn không nhiều.
            </li>
        </ul>

        <p>
            Các triệu chứng của khó tiêu và bệnh lý dạ dày có thể chồng lấp
            với nhau. Vì vậy, nếu triệu chứng thường xuyên xuất hiện hoặc
            ảnh hưởng đến sinh hoạt, nên được nhân viên y tế đánh giá thay vì
            tự điều trị kéo dài.
        </p>

        <h3>3. Đặc điểm thường gặp của trào ngược dạ dày - thực quản (GERD)</h3>

        <p>
            Trào ngược dạ dày - thực quản xảy ra khi dịch hoặc các thành phần
            trong dạ dày trào ngược lên thực quản. Khi tình trạng này gây
            triệu chứng lặp lại hoặc dẫn đến biến chứng, có thể được gọi là
            bệnh trào ngược dạ dày - thực quản (GERD).
        </p>

        <p>
            Hai biểu hiện điển hình là <strong>ợ nóng</strong> và
            <strong>trào ngược</strong>. Một số người có thể nhận thấy triệu chứng
            rõ hơn sau bữa ăn, khi cúi người hoặc khi nằm.
        </p>

        <p>
            Nếu triệu chứng thường xuất hiện vào ban đêm, việc tránh ăn trong
            khoảng 2 - 3 giờ trước khi đi ngủ có thể giúp giảm tình trạng
            trào ngược ở một số người.
        </p>

        <h3>4. Khi nào đau vùng thượng vị có thể liên quan đến loét dạ dày - tá tràng?</h3>

        <p>
            Loét dạ dày - tá tràng là tình trạng xuất hiện tổn thương dạng
            loét trên niêm mạc dạ dày hoặc tá tràng. Đau hoặc khó chịu ở vùng
            bụng trên là một triệu chứng thường gặp, nhưng không phải người
            bị loét đều có biểu hiện giống nhau.
        </p>

        <p>
            Một số người có thể cảm thấy đau âm ỉ hoặc nóng rát ở vùng bụng
            trên; triệu chứng có thể xuất hiện khi đói, về đêm hoặc thay đổi
            liên quan đến bữa ăn. Ngoài ra có thể gặp đầy bụng, buồn nôn,
            ợ hơi hoặc cảm giác nhanh no.
        </p>

        <p>
            Hai nguyên nhân quan trọng của loét dạ dày - tá tràng là
            <strong>nhiễm Helicobacter pylori (H. pylori)</strong> và việc
            sử dụng <strong>thuốc chống viêm không steroid (NSAID)</strong>
            như aspirin, ibuprofen hoặc naproxen.
        </p>

        <p>
            Do đó, nếu nghi ngờ loét dạ dày, việc chỉ sử dụng thuốc làm giảm
            acid để giảm đau chưa chắc đã giải quyết được nguyên nhân.
            Trong trường hợp liên quan đến H. pylori, người bệnh có thể cần
            xét nghiệm và phác đồ điều trị phối hợp do bác sĩ chỉ định.
        </p>

        <h3>5. Những dấu hiệu cảnh báo không nên tự điều trị kéo dài</h3>

        <p>
            Một số triệu chứng có thể là dấu hiệu của biến chứng hoặc một
            bệnh lý cần được đánh giá sớm. Khi xuất hiện những biểu hiện
            dưới đây, không nên chỉ tiếp tục dùng thuốc không kê đơn để
            che lấp triệu chứng.
        </p>

        <ul>
            <li>
                <strong>Nôn ra máu hoặc chất nôn giống bã cà phê:</strong>
                Có thể là biểu hiện của xuất huyết đường tiêu hóa.
            </li>

            <li>
                <strong>Đi ngoài phân đen, dính như hắc ín hoặc có máu:</strong>
                Có thể liên quan đến chảy máu đường tiêu hóa và cần được
                đánh giá y tế kịp thời.
            </li>

            <li>
                <strong>Đau bụng dữ dội, đột ngột hoặc đau liên tục:</strong>
                Đặc biệt khi cơn đau khác hẳn những lần trước hoặc ngày càng
                nghiêm trọng.
            </li>

            <li>
                <strong>Khó nuốt hoặc đau khi nuốt:</strong>
                Đây là dấu hiệu cần được đánh giá, đặc biệt khi triệu chứng
                mới xuất hiện hoặc tăng dần.
            </li>

            <li>
                <strong>Sụt cân không chủ ý:</strong>
                Cần tìm nguyên nhân thay vì chỉ điều trị triệu chứng tiêu hóa.
            </li>

            <li>
                <strong>Nôn ói kéo dài hoặc tái diễn:</strong>
                Có thể dẫn đến mất nước và cũng có thể là biểu hiện của
                bệnh lý cần được kiểm tra.
            </li>

            <li>
                <strong>Chóng mặt, choáng váng, ngất hoặc mệt bất thường:</strong>
                Đặc biệt khi đi kèm nôn ra máu hoặc đi ngoài phân đen,
                cần được xử trí y tế ngay.
            </li>

            <li>
                <strong>Đau ngực:</strong>
                Không nên mặc định mọi cảm giác nóng rát hoặc đau ngực đều
                là trào ngược. Đau ngực có thể có nguyên nhân tim mạch và
                cần được đánh giá phù hợp.
            </li>
        </ul>

        <p>
            <strong>Lưu ý:</strong> Nếu có dấu hiệu xuất huyết tiêu hóa như
            nôn ra máu, chất nôn giống bã cà phê, phân đen hoặc có máu,
            đặc biệt khi kèm choáng, ngất, khó thở hoặc đau dữ dội, cần
            tìm kiếm trợ giúp y tế ngay thay vì tiếp tục tự điều trị tại nhà.
        </p>

        <h3>6. Những nguyên nhân thường gặp cần lưu ý</h3>

        <h4>H. pylori</h4>

        <p>
            H. pylori là một loại vi khuẩn có thể gây viêm niêm mạc dạ dày
            và là một trong những nguyên nhân chính của loét dạ dày - tá tràng.
            Nếu được xác định nhiễm H. pylori, điều trị thường cần phối hợp
            nhiều thuốc theo phác đồ của bác sĩ.
        </p>

        <h4>Thuốc chống viêm không steroid (NSAID)</h4>

        <p>
            Một số thuốc giảm đau chống viêm thuộc nhóm NSAID, chẳng hạn
            aspirin, ibuprofen và naproxen, có thể làm tăng nguy cơ tổn thương
            niêm mạc và loét đường tiêu hóa, đặc biệt khi sử dụng kéo dài,
            liều cao hoặc kết hợp với các yếu tố nguy cơ khác.
        </p>

        <p>
            Người thường xuyên sử dụng thuốc giảm đau, người từng bị loét
            hoặc xuất huyết tiêu hóa và người đang dùng thuốc chống đông
            hoặc thuốc ảnh hưởng đến đông máu nên trao đổi với bác sĩ hoặc
            dược sĩ trước khi tự sử dụng thêm thuốc giảm đau.
        </p>

        <h3>7. Thuốc không kê đơn có thể giúp gì?</h3>

        <p>
            Một số thuốc không kê đơn có thể giúp kiểm soát triệu chứng
            ợ nóng hoặc khó tiêu trong những trường hợp phù hợp. Tuy nhiên,
            thuốc không kê đơn chủ yếu nhằm kiểm soát triệu chứng và không
            phải lúc nào cũng xử lý được nguyên nhân gây bệnh.
        </p>

        <h4>Thuốc kháng acid</h4>

        <p>
            Thuốc kháng acid có tác dụng trung hòa acid trong dạ dày và có
            thể giúp giảm nhanh các triệu chứng ợ nóng hoặc khó chịu nhẹ
            trong thời gian ngắn.
        </p>

        <p>
            Không nên tự sử dụng thuốc kháng acid hằng ngày hoặc kéo dài,
            đặc biệt khi triệu chứng nặng hoặc tái phát thường xuyên, nếu
            chưa được nhân viên y tế tư vấn.
        </p>

        <h4>Thuốc kháng histamine H2</h4>

        <p>
            Nhóm thuốc H2 giúp giảm lượng acid mà dạ dày tiết ra và có thể
            được sử dụng trong một số trường hợp ợ nóng hoặc trào ngược.
            Việc lựa chọn thuốc và thời gian sử dụng cần dựa trên tình trạng
            cụ thể và hướng dẫn của sản phẩm.
        </p>

        <h4>Thuốc ức chế bơm proton (PPI)</h4>

        <p>
            PPI làm giảm tiết acid dạ dày và thường có hiệu quả tốt trong
            kiểm soát GERD cũng như hỗ trợ làm lành tổn thương thực quản
            liên quan đến acid.
        </p>

        <p>
            Tuy nhiên, PPI không nên được xem là thuốc có thể tự dùng lâu dài
            cho mọi trường hợp đau dạ dày. Nếu được chỉ định điều trị GERD,
            thuốc cần được sử dụng đúng loại, đúng liều và đúng thời điểm.
            Một số PPI có hiệu quả tốt hơn khi uống trước bữa ăn theo hướng
            dẫn chuyên môn hoặc hướng dẫn của sản phẩm.
        </p>

        <p>
            Nếu triệu chứng không cải thiện với thuốc không kê đơn, thường
            xuyên tái phát hoặc xuất hiện dấu hiệu cảnh báo, nên đi khám
            thay vì tự tăng liều hoặc đổi sang nhiều loại thuốc khác nhau.
        </p>

        <h3>8. Có nên tự mua thuốc khi bị đau dạ dày?</h3>

        <p>
            Với những triệu chứng nhẹ, thỉnh thoảng xuất hiện và không có
            dấu hiệu cảnh báo, một số thuốc không kê đơn có thể được sử dụng
            trong thời gian ngắn theo đúng hướng dẫn trên nhãn và tư vấn
            của dược sĩ.
        </p>

        <p>
            Tuy nhiên, không nên tự điều trị kéo dài nếu triệu chứng liên tục
            hoặc tái diễn. Đặc biệt, không nên chỉ dùng thuốc giảm acid để
            trì hoãn việc thăm khám khi có khó nuốt, sụt cân không chủ ý,
            nôn kéo dài, xuất huyết tiêu hóa hoặc đau bụng dữ dội.
        </p>

        <p>
            Người đang mang thai, cho con bú, trẻ em, người lớn tuổi,
            người có bệnh nền, người đang sử dụng nhiều thuốc hoặc đang dùng
            thuốc chống đông nên hỏi bác sĩ hoặc dược sĩ trước khi sử dụng
            thuốc không kê đơn.
        </p>

        <h3>9. Những thói quen có thể giúp giảm triệu chứng trào ngược</h3>

        <p>
            Không phải mọi người bị trào ngược đều cần kiêng hoàn toàn cùng
            một nhóm thực phẩm. Một số thức ăn hoặc đồ uống chỉ gây triệu chứng
            ở một số người. Vì vậy, nên chú ý những yếu tố thực sự làm triệu
            chứng của bản thân tăng lên.
        </p>

        <ul>
            <li>
                <strong>Không ăn quá sát giờ ngủ:</strong>
                Nếu thường bị trào ngược về đêm, có thể thử kết thúc bữa ăn
                khoảng 2 - 3 giờ trước khi nằm.
            </li>

            <li>
                <strong>Tránh ăn quá no:</strong>
                Các bữa ăn quá lớn có thể làm triệu chứng trào ngược rõ hơn
                ở một số người.
            </li>

            <li>
                <strong>Theo dõi thực phẩm gây kích thích triệu chứng:</strong>
                Một số người nhạy cảm với thức ăn nhiều chất béo, đồ cay,
                chocolate, cà phê, rượu hoặc các thực phẩm có tính acid.
                Không nhất thiết phải loại bỏ tất cả nếu chúng không gây
                triệu chứng cho bạn.
            </li>

            <li>
                <strong>Giảm cân nếu đang thừa cân hoặc béo phì:</strong>
                Giảm cân có thể giúp cải thiện triệu chứng GERD ở một số người.
            </li>

            <li>
                <strong>Không hút thuốc:</strong>
                Hút thuốc có thể làm tình trạng trào ngược và sức khỏe đường
                tiêu hóa trở nên bất lợi hơn.
            </li>

            <li>
                <strong>Nâng phần đầu giường khi có triệu chứng ban đêm:</strong>
                Một số hướng dẫn chuyên môn đề cập đến việc nâng đầu giường
                đối với người có triệu chứng trào ngược về đêm.
            </li>
        </ul>

        <h3>10. Khi nào nên đi khám để tìm nguyên nhân?</h3>

        <p>
            Bạn nên cân nhắc đi khám nếu triệu chứng đau vùng thượng vị,
            ợ nóng hoặc trào ngược xuất hiện thường xuyên, kéo dài, ảnh hưởng
            đến ăn uống hoặc giấc ngủ, hoặc không cải thiện dù đã thay đổi
            lối sống và sử dụng thuốc đúng hướng dẫn.
        </p>

        <p>
            Bác sĩ có thể dựa vào triệu chứng, tiền sử bệnh và thuốc đang sử dụng
            để quyết định có cần xét nghiệm hay không. Tùy trường hợp, người bệnh
            có thể được kiểm tra H. pylori hoặc thực hiện các xét nghiệm khác,
            trong đó nội soi đường tiêu hóa trên có thể được chỉ định khi có
            dấu hiệu cảnh báo hoặc cần tìm nguyên nhân cụ thể.
        </p>

        <h3>11. Câu hỏi thường gặp</h3>

        <h4>Đau dạ dày có phải chắc chắn là viêm loét dạ dày không?</h4>

        <p>
            Không. "Đau dạ dày" là cách gọi phổ biến cho nhiều triệu chứng
            ở vùng bụng trên. Khó tiêu, GERD, viêm dạ dày, loét dạ dày -
            tá tràng và nhiều nguyên nhân khác có thể gây cảm giác tương tự.
            Cần đánh giá toàn bộ triệu chứng và tiền sử để xác định nguyên nhân.
        </p>

        <h4>Ợ chua có phải là trào ngược dạ dày không?</h4>

        <p>
            Ợ chua là một triệu chứng thường gặp của trào ngược, nhưng chỉ
            dựa vào một triệu chứng đơn lẻ chưa đủ để xác định chẩn đoán.
            Nếu ợ nóng hoặc trào ngược xuất hiện thường xuyên, đặc biệt khi
            ảnh hưởng đến sinh hoạt hoặc giấc ngủ, nên được tư vấn y tế.
        </p>

        <h4>Uống thuốc giảm acid lâu dài có được không?</h4>

        <p>
            Không nên tự ý sử dụng kéo dài mà không đánh giá lại nguyên nhân.
            Một số người cần điều trị acid lâu dài theo chỉ định của bác sĩ,
            trong khi những trường hợp khác chỉ cần điều trị ngắn hạn hoặc
            theo nhu cầu. Việc sử dụng thuốc nên dựa trên lợi ích, nguy cơ
            và tình trạng cụ thể của từng người.
        </p>

        <h4>Đau dạ dày có nên uống thuốc giảm đau?</h4>

        <p>
            Cần thận trọng với một số thuốc giảm đau thuộc nhóm NSAID như
            aspirin, ibuprofen hoặc naproxen vì chúng có thể làm tăng nguy cơ
            tổn thương niêm mạc và loét đường tiêu hóa. Nếu đang đau bụng
            hoặc có tiền sử bệnh dạ dày, nên hỏi bác sĩ hoặc dược sĩ trước
            khi lựa chọn thuốc giảm đau.
        </p>

        <h4>Nôn ra máu hoặc đi ngoài phân đen có nguy hiểm không?</h4>

        <p>
            Đây có thể là dấu hiệu xuất huyết đường tiêu hóa. Đặc biệt nếu
            đi kèm chóng mặt, choáng, ngất, mệt nhiều, khó thở hoặc đau dữ dội,
            cần tìm kiếm trợ giúp y tế ngay.
        </p>

        <h3>12. Tóm tắt</h3>

        <p>
            Đau vùng thượng vị, ợ hơi, ợ chua, nóng rát hoặc đầy bụng là những
            triệu chứng phổ biến nhưng không thể chỉ dựa vào đó để kết luận
            một người bị viêm loét dạ dày hay GERD.
        </p>

        <p>
            Với triệu chứng nhẹ và thỉnh thoảng xuất hiện, thay đổi thói quen
            ăn uống, tránh nằm ngay sau khi ăn và sử dụng thuốc không kê đơn
            đúng hướng dẫn có thể giúp kiểm soát triệu chứng ở một số trường hợp.
            Tuy nhiên, nếu triệu chứng kéo dài, tái phát thường xuyên hoặc không
            đáp ứng với điều trị, nên đi khám để tìm nguyên nhân.
        </p>

        <p>
            Đặc biệt, <strong>nôn ra máu, phân đen hoặc có máu, đau bụng dữ dội,
            khó nuốt, nôn kéo dài, sụt cân không chủ ý, choáng hoặc ngất</strong>
            là những dấu hiệu không nên bỏ qua.
        </p>

        <p>
            <strong>Thông tin trên mang tính giáo dục sức khỏe và không thay thế
            cho chẩn đoán hoặc điều trị trực tiếp từ bác sĩ, dược sĩ và nhân
            viên y tế.</strong>
        </p>

        <h3>📚 Nguồn tham khảo</h3>

        <ul>
            <li>
                <strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) - NIH:</strong>
                Symptoms & Causes of GER & GERD.
            </li>

            <li>
                <strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) - NIH:</strong>
                Treatment for GER & GERD.
            </li>

            <li>
                <strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) - NIH:</strong>
                Symptoms & Causes of Peptic Ulcers (Stomach or Duodenal Ulcers).
            </li>

            <li>
                <strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) - NIH:</strong>
                Treatment for Peptic Ulcers (Stomach or Duodenal Ulcers).
            </li>

            <li>
                <strong>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) - NIH:</strong>
                Symptoms & Causes of Gastrointestinal Bleeding.
            </li>

            <li>
                <strong>American College of Gastroenterology (ACG):</strong>
                Acid Reflux / GERD - Patient Information.
            </li>

            <li>
                <strong>National Institute for Health and Care Excellence (NICE):</strong>
                Gastro-oesophageal reflux disease and dyspepsia in adults - Investigation and Management.
            </li>
        </ul>
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

    excerpt: "Vitamin C cần bao nhiêu mỗi ngày, nên dùng lúc nào và những lưu ý khi bổ sung liều cao.",

    content: `
        <p>
            Vitamin C là một vitamin tan trong nước, cần thiết cho nhiều chức năng
            của cơ thể. Vitamin C tham gia vào hoạt động bình thường của hệ miễn dịch,
            hoạt động chống oxy hóa và quá trình tổng hợp collagen. Cơ thể con người
            không tự tổng hợp được vitamin C nên cần nhận từ chế độ ăn uống hằng ngày.
        </p>

        <p>
            Các nguồn vitamin C tự nhiên phong phú gồm trái cây và rau củ như cam,
            bưởi, kiwi, dâu tây, ớt chuông, bông cải xanh, cà chua và một số loại rau quả khác.
        </p>

        <h3>Vitamin C nên uống vào lúc nào?</h3>

        <p>
            Không có một thời điểm cố định trong ngày bắt buộc phải uống vitamin C.
            Điều quan trọng hơn là sử dụng phù hợp với nhu cầu và hướng dẫn của sản phẩm.
        </p>

        <p>
            Vitamin C có thể gây khó chịu đường tiêu hóa ở một số người, đặc biệt khi
            sử dụng liều cao. Nếu cảm thấy cồn cào, buồn nôn hoặc khó chịu khi uống
            lúc đói, có thể dùng cùng hoặc sau bữa ăn để dễ dung nạp hơn.
        </p>

        <h3>Mỗi ngày cần bao nhiêu Vitamin C?</h3>

        <p>
            Nhu cầu vitamin C phụ thuộc vào tuổi, giới tính và một số yếu tố đặc biệt.
            Đối với người trưởng thành không hút thuốc, lượng khuyến nghị hằng ngày là:
        </p>

        <ul>
            <li>
                <strong>Nam trưởng thành:</strong> khoảng 90 mg/ngày.
            </li>

            <li>
                <strong>Nữ trưởng thành:</strong> khoảng 75 mg/ngày.
            </li>

            <li>
                <strong>Phụ nữ mang thai:</strong> khoảng 85 mg/ngày.
            </li>

            <li>
                <strong>Phụ nữ cho con bú:</strong> khoảng 120 mg/ngày.
            </li>

            <li>
                <strong>Người hút thuốc:</strong> cần thêm khoảng 35 mg vitamin C
                mỗi ngày so với người không hút thuốc.
            </li>
        </ul>

        <p>
            Đây là mức khuyến nghị dinh dưỡng chung, không phải liều điều trị.
            Nhu cầu thực tế có thể khác nhau tùy tình trạng sức khỏe và chế độ ăn.
        </p>

        <h3>Giới hạn bao nhiêu là quá nhiều?</h3>

        <p>
            Đối với người trưởng thành, giới hạn trên có thể dung nạp được của vitamin C
            là <strong>2.000 mg/ngày</strong>, tính từ tất cả các nguồn gồm thực phẩm,
            đồ uống và thực phẩm bổ sung.
        </p>

        <p>
            Sử dụng vitamin C với liều cao có thể gây một số tác dụng không mong muốn
            như tiêu chảy, buồn nôn, đau quặn bụng và các rối loạn tiêu hóa khác.
            Vì vậy, không nên tự ý sử dụng liều rất cao trong thời gian dài chỉ vì
            nghĩ rằng vitamin C càng nhiều càng tốt.
        </p>

        <h3>Vitamin C có trong những thực phẩm nào?</h3>

        <p>
            Đối với phần lớn người khỏe mạnh, thực phẩm là nguồn cung cấp vitamin C
            được ưu tiên. Một chế độ ăn đa dạng với rau củ và trái cây có thể giúp
            đáp ứng nhu cầu hằng ngày.
        </p>

        <ul>
            <li>Cam và các loại trái cây họ cam quýt.</li>
            <li>Kiwi.</li>
            <li>Dâu tây.</li>
            <li>Ớt chuông đỏ và xanh.</li>
            <li>Bông cải xanh.</li>
            <li>Cà chua.</li>
            <li>Dưa lưới và một số loại rau quả khác.</li>
        </ul>

        <p>
            Vitamin C khá nhạy với nhiệt và quá trình bảo quản. Việc nấu hoặc bảo quản
            thực phẩm trong thời gian dài có thể làm giảm lượng vitamin C.
        </p>

        <h3>Khi nào cần thận trọng khi bổ sung Vitamin C?</h3>

        <p>
            Người đang sử dụng thuốc, có bệnh lý nền hoặc dự định dùng vitamin C
            ở liều cao nên trao đổi với bác sĩ hoặc dược sĩ trước khi sử dụng.
        </p>

        <p>
            Đặc biệt, người mắc bệnh <strong>ứ sắt di truyền (hemochromatosis)</strong>
            cần thận trọng với liều vitamin C cao vì vitamin C có thể làm tăng hấp thu
            sắt và làm tình trạng quá tải sắt trở nên nghiêm trọng hơn.
        </p>

        <p>
            Người đang điều trị ung thư bằng hóa trị hoặc xạ trị cũng nên trao đổi
            với bác sĩ điều trị trước khi sử dụng các sản phẩm bổ sung vitamin C,
            đặc biệt ở liều cao.
        </p>

        <h3>Vitamin C có giúp phòng cảm lạnh không?</h3>

        <p>
            Vitamin C thường được sử dụng với mục đích hỗ trợ sức khỏe trong mùa
            cảm lạnh. Tuy nhiên, bằng chứng cho thấy việc bổ sung vitamin C thường xuyên
            không làm giảm nguy cơ mắc cảm lạnh ở phần lớn mọi người.
        </p>

        <p>
            Một số nghiên cứu cho thấy người sử dụng vitamin C thường xuyên có thể
            bị cảm lạnh trong thời gian ngắn hơn hoặc triệu chứng nhẹ hơn ở một mức độ
            nhất định. Tuy nhiên, uống vitamin C sau khi các triệu chứng cảm lạnh
            đã bắt đầu không cho thấy lợi ích rõ ràng trong việc rút ngắn thời gian bệnh.
        </p>

        <p class="blog-highlight">
            <em>
                💡 <strong>Mẹo nhỏ:</strong>
                Hãy ưu tiên vitamin C từ rau củ và trái cây trong chế độ ăn hằng ngày.
                Nếu sử dụng thực phẩm bổ sung, nên đọc kỹ hàm lượng trên nhãn và tránh
                tự ý dùng liều cao kéo dài.
            </em>
        </p>

        <h3>Tóm lại</h3>

        <p>
            Vitamin C là vi chất thiết yếu, đóng vai trò trong hoạt động miễn dịch,
            chống oxy hóa, tổng hợp collagen và hấp thu sắt từ thực phẩm có nguồn gốc
            thực vật.
        </p>

        <p>
            Không nhất thiết phải uống vitamin C vào một thời điểm cố định trong ngày.
            Nếu sử dụng khiến dạ dày khó chịu, có thể dùng cùng hoặc sau bữa ăn.
            Quan trọng nhất là đáp ứng nhu cầu phù hợp và không lạm dụng liều cao.
        </p>

        <p>
            Một chế độ ăn đa dạng với nhiều loại rau củ và trái cây vẫn nên là nền tảng
            để cung cấp vitamin C cho cơ thể.
        </p>
    `
}

       ,{
        id: "bai-viet-4",

        category: "Theo dõi sức khỏe",

        title: "Đường huyết: Các chỉ số cần biết và cách tự theo dõi bằng máy Aria",

        image: "images/cac_chi_so_duong_huyet_can_biet.webp",

        excerpt: "Tìm hiểu các chỉ số đường huyết, thời điểm đo và cách tự theo dõi tại nhà đúng cách. Hướng dẫn sử dụng máy đo đường huyết Aria và lưu ý khi đọc kết quả.",

        content: `
            <p>
                Đường huyết là lượng glucose có trong máu tại một thời điểm nhất định.
                Glucose là nguồn năng lượng quan trọng đối với cơ thể và chịu ảnh hưởng bởi
                chế độ ăn uống, vận động, giấc ngủ và nhiều yếu tố khác.
            </p>

            <p>
                Theo dõi đường huyết định kỳ có thể giúp mỗi người nhận biết sự thay đổi của chỉ số
                theo thời gian, đặc biệt đối với những người đang được bác sĩ hướng dẫn theo dõi
                đường huyết tại nhà.
            </p>

            <p>
                Tuy nhiên, <strong>kết quả từ máy đo đường huyết cá nhân chỉ có giá trị tham khảo
                và theo dõi</strong>, không nên được sử dụng để tự chẩn đoán bệnh.
            </p>

            <h3>Các chỉ số đường huyết cần biết</h3>

            <p>Có nhiều thời điểm có thể kiểm tra đường huyết. Trong thực tế, những thời điểm thường được quan tâm gồm:</p>

            <div class="blog-table-wrap">
                <table>
                    <thead>
                        <tr><th>Chỉ số</th><th>Thời điểm đo</th><th>Mục đích theo dõi</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Đường huyết lúc đói</td><td>Sau khi nhịn ăn qua đêm, thường ít nhất 8 giờ</td><td>Theo dõi mức glucose khi chưa ăn</td></tr>
                        <tr><td>Đường huyết trước ăn</td><td>Trước bữa ăn</td><td>Theo dõi glucose trước bữa ăn</td></tr>
                        <tr><td>Đường huyết sau ăn</td><td>Thường khoảng 2 giờ sau khi bắt đầu ăn</td><td>Theo dõi sự thay đổi glucose sau bữa ăn</td></tr>
                        <tr><td>Đường huyết bất kỳ</td><td>Bất kỳ thời điểm nào</td><td>Kiểm tra khi cần hoặc theo hướng dẫn của nhân viên y tế</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Đường huyết lúc đói</h4>
            <p>
                Đường huyết lúc đói thường được đo vào buổi sáng trước khi ăn uống.
                Khi đo tại nhà, cần chú ý thời gian nhịn ăn và ghi rõ kết quả để có thể so sánh giữa các ngày.
            </p>

            <h4>Đường huyết sau ăn</h4>
            <p>
                Đường huyết sau ăn thường được kiểm tra khoảng <strong>2 giờ sau khi bắt đầu bữa ăn</strong>
                khi cần đánh giá mức glucose sau bữa ăn. Thời điểm đo cần được ghi lại chính xác vì kết quả
                có thể khác nhau đáng kể nếu đo sau 30 phút, 1 giờ hoặc 2 giờ.
            </p>

            <h4>HbA1c là gì?</h4>
            <p>
                HbA1c là xét nghiệm phản ánh mức đường huyết trung bình trong một khoảng thời gian dài hơn,
                thường được sử dụng trong đánh giá và theo dõi bệnh đái tháo đường. Khác với máy đo đường huyết
                tại nhà, HbA1c cần được thực hiện bằng xét nghiệm phù hợp.
            </p>

            <h3>Bảng tham khảo các mốc đường huyết</h3>

            <p>
                Các mốc dưới đây giúp người đọc hiểu cách các xét nghiệm glucose thường được sử dụng
                trong đánh giá nguy cơ và chẩn đoán đái tháo đường:
            </p>

            <div class="blog-table-wrap">
                <table>
                    <thead>
                        <tr><th>Xét nghiệm</th><th>Bình thường</th><th>Tiền đái tháo đường</th><th>Đái tháo đường*</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Đường huyết lúc đói</td><td>&lt; 100 mg/dL</td><td>100–125 mg/dL</td><td>≥ 126 mg/dL</td></tr>
                        <tr><td>HbA1c</td><td>&lt; 5,7%</td><td>5,7–6,4%</td><td>≥ 6,5%</td></tr>
                        <tr><td>Đường huyết 2 giờ sau nghiệm pháp dung nạp glucose 75 g</td><td>&lt; 140 mg/dL</td><td>140–199 mg/dL</td><td>≥ 200 mg/dL</td></tr>
                    </tbody>
                </table>
            </div>

            <p>
                <em>*Các ngưỡng trên là các mốc xét nghiệm dùng trong đánh giá/chẩn đoán. Chẩn đoán cần được thực hiện
                theo quy trình y khoa phù hợp và không nên dựa vào một lần đo bằng máy cá nhân tại nhà.</em>
            </p>

            <p class="blog-highlight">
                <strong>Lưu ý:</strong> Không nên tự kết luận mình bị tiền đái tháo đường hoặc đái tháo đường
                chỉ dựa trên một kết quả đo tại nhà.
            </p>

            <h3>Vì sao nên theo dõi đường huyết tại nhà?</h3>

            <p>
                Đối với những người được nhân viên y tế hướng dẫn theo dõi đường huyết, việc đo tại nhà có thể
                giúp ghi nhận sự thay đổi của glucose trong những thời điểm khác nhau.
                Một số thông tin nên ghi lại cùng với kết quả:
            </p>

            <ul>
                <li>Ngày và giờ đo</li>
                <li>Kết quả đo (mg/dL)</li>
                <li>Đo lúc đói, trước ăn hay sau ăn</li>
                <li>Bữa ăn gần nhất</li>
                <li>Hoạt động thể chất trong ngày</li>
                <li>Các yếu tố bất thường nếu có</li>
            </ul>

            <p>
                Việc ghi chép giúp tạo thành <strong>nhật ký đường huyết</strong>, từ đó thuận tiện hơn
                khi trao đổi với bác sĩ hoặc nhân viên y tế.
            </p>

            <h3>Cách tự đo đường huyết tại nhà bằng máy Aria</h3>

            <p>
                Máy đo đường huyết Aria có thể được sử dụng để kiểm tra đường huyết tại nhà theo hướng dẫn
                của từng model máy.
            </p>

            <h4>Bước 1: Chuẩn bị</h4>
            <ul>
                <li>Máy đo đường huyết Aria</li>
                <li>Que thử tương thích</li>
                <li>Kim lấy máu</li>
                <li>Bút lấy máu nếu sử dụng</li>
                <li>Khăn giấy hoặc vật dụng vệ sinh phù hợp</li>
            </ul>
            <p>Kiểm tra hạn sử dụng và tình trạng của que thử trước khi sử dụng.</p>

            <h4>Bước 2: Rửa và lau khô tay</h4>
            <p>
                Rửa tay bằng xà phòng và nước sạch, sau đó <strong>lau khô hoàn toàn</strong> trước khi lấy máu.
                Tay còn dính thức ăn, nước ngọt hoặc các chất có đường có thể ảnh hưởng đến kết quả đo.
            </p>

            <h4>Bước 3: Lấy máu</h4>
            <p>
                Sử dụng kim lấy máu theo hướng dẫn của thiết bị. Thông thường có thể lấy máu ở đầu ngón tay.
                Không nên bóp hoặc nặn ngón tay quá mạnh vì có thể ảnh hưởng đến mẫu máu.
            </p>

            <h4>Bước 4: Đưa máu vào que thử</h4>
            <p>
                Đưa giọt máu vào đúng vị trí nhận mẫu của que thử theo hướng dẫn sử dụng.
                Chờ máy xử lý và hiển thị kết quả.
            </p>

            <h4>Bước 5: Ghi lại kết quả</h4>
            <p>
                Sau khi có kết quả, nên ghi lại: <strong>ngày – giờ – kết quả – thời điểm so với bữa ăn.</strong>
                Ví dụ:
            </p>
            <p class="blog-highlight">02/10 – 07:00 – 92 mg/dL – lúc đói.</p>
            <p>Cách ghi này giúp việc theo dõi nhiều ngày trở nên dễ dàng hơn.</p>

            <h3>Những yếu tố có thể ảnh hưởng đến đường huyết</h3>

            <p>Đường huyết không phải là một con số cố định. Chỉ số có thể thay đổi theo nhiều yếu tố như:</p>

            <ul>
                <li><strong>Chế độ ăn uống:</strong> lượng và loại carbohydrate trong bữa ăn có thể ảnh hưởng đến đường huyết sau ăn.</li>
                <li><strong>Vận động:</strong> hoạt động thể chất có thể làm thay đổi nhu cầu sử dụng glucose của cơ thể.</li>
                <li><strong>Giấc ngủ:</strong> thời gian và chất lượng giấc ngủ cũng có thể liên quan đến sự thay đổi đường huyết.</li>
                <li><strong>Căng thẳng:</strong> căng thẳng có thể ảnh hưởng đến các hormone trong cơ thể và làm thay đổi đường huyết.</li>
                <li><strong>Thuốc và tình trạng sức khỏe:</strong> một số loại thuốc và tình trạng sức khỏe có thể ảnh hưởng đến đường huyết. Nếu đang sử dụng thuốc điều trị, không nên tự ý thay đổi liều lượng dựa trên kết quả đo tại nhà.</li>
            </ul>

            <h3>Khi nào nên trao đổi với nhân viên y tế?</h3>

            <p>
                Nếu kết quả đường huyết thường xuyên cao hoặc thấp bất thường, hoặc có sự thay đổi kéo dài,
                nên trao đổi với bác sĩ hoặc nhân viên y tế để được đánh giá. Đặc biệt, nếu xuất hiện các
                triệu chứng bất thường như:
            </p>

            <ul>
                <li>Khát nhiều</li>
                <li>Đi tiểu nhiều</li>
                <li>Mệt mỏi bất thường</li>
                <li>Run hoặc vã mồ hôi</li>
                <li>Chóng mặt</li>
                <li>Lú lẫn</li>
                <li>Yếu hoặc khó chịu bất thường</li>
            </ul>

            <p>cần được đánh giá phù hợp thay vì chỉ dựa vào kết quả của máy đo tại nhà.</p>

            <p class="blog-highlight">
                Nếu người đang sử dụng thuốc điều trị đái tháo đường có kết quả bất thường,
                <strong>không nên tự ý ngừng thuốc hoặc thay đổi liều dùng.</strong>
            </p>

            <h3>Giới thiệu máy đo đường huyết Aria</h3>

            <p>
                Đối với người cần theo dõi đường huyết tại nhà theo hướng dẫn của nhân viên y tế,
                <strong>máy đo đường huyết Aria</strong> là một lựa chọn thiết bị theo dõi cá nhân.
                Khi lựa chọn và sử dụng máy, người dùng nên chú ý đến:
            </p>

            <ul>
                <li>Máy và que thử phải tương thích với nhau.</li>
                <li>Đọc kỹ hướng dẫn sử dụng trước khi đo.</li>
                <li>Bảo quản que thử đúng điều kiện.</li>
                <li>Kiểm tra hạn sử dụng của que thử.</li>
                <li>Giữ thiết bị sạch sẽ và bảo quản đúng cách.</li>
                <li>Thực hiện đo đúng quy trình để hạn chế sai số.</li>
            </ul>

            <h4>Lưu ý khi sử dụng máy Aria</h4>
            <p>
                Mỗi model máy Aria có thể có thiết kế và hướng dẫn sử dụng khác nhau. Vì vậy, người dùng nên ưu tiên
                <strong>hướng dẫn sử dụng chính thức đi kèm sản phẩm</strong>. Nếu kết quả đo không phù hợp với tình trạng
                thực tế hoặc xuất hiện kết quả bất thường, nên kiểm tra lại thao tác đo và trao đổi với nhân viên y tế khi cần.
            </p>

            <h3>Câu hỏi thường gặp về đường huyết</h3>

            <h4>1. Đường huyết bao nhiêu là bình thường?</h4>
            <p>
                Mức đường huyết phụ thuộc vào thời điểm và phương pháp xét nghiệm. Không nên dùng một con số duy nhất
                để đánh giá tình trạng sức khỏe. Đối với xét nghiệm đường huyết lúc đói, mức dưới 100 mg/dL thường được
                xem là trong phạm vi bình thường ở người không mang thai theo các tiêu chí chẩn đoán thông dụng.
            </p>

            <h4>2. Nên đo đường huyết lúc nào?</h4>
            <p>
                Có thể đo lúc đói, trước ăn hoặc khoảng 2 giờ sau khi bắt đầu ăn tùy mục đích theo dõi và hướng dẫn
                của nhân viên y tế.
            </p>

            <h4>3. Có thể dùng máy đo đường huyết tại nhà để chẩn đoán bệnh không?</h4>
            <p>
                Không nên. Máy đo tại nhà chủ yếu hỗ trợ theo dõi. Chẩn đoán cần dựa trên các xét nghiệm và tiêu chuẩn
                y khoa phù hợp.
            </p>

            <h4>4. Vì sao cùng một thời điểm nhưng kết quả có thể khác nhau?</h4>
            <p>
                Kết quả có thể bị ảnh hưởng bởi kỹ thuật lấy máu, tình trạng tay, que thử, thiết bị, thời điểm đo
                và nhiều yếu tố khác.
            </p>

            <h4>5. Có cần rửa tay trước khi đo không?</h4>
            <p>Có. Nên rửa tay sạch và lau khô hoàn toàn trước khi lấy mẫu máu.</p>

            <h4>6. Có nên đo đường huyết mỗi ngày không?</h4>
            <p>
                Tần suất đo phụ thuộc vào tình trạng sức khỏe và mục đích theo dõi. Người đang điều trị đái tháo đường
                nên thực hiện theo lịch được bác sĩ hoặc nhân viên y tế hướng dẫn.
            </p>

            <h4>7. Nếu kết quả đường huyết bất thường thì phải làm gì?</h4>
            <p>
                Trước tiên kiểm tra lại thao tác đo, que thử và các điều kiện liên quan. Nếu kết quả tiếp tục bất thường
                hoặc đi kèm triệu chứng đáng lo ngại, nên liên hệ nhân viên y tế để được đánh giá.
            </p>

            <h3>Kết luận</h3>

            <p>
                Theo dõi đường huyết đúng cách là một phần quan trọng trong việc chủ động chăm sóc sức khỏe.
                Khi sử dụng máy đo đường huyết Aria tại nhà, hãy chú ý đến <strong>thời điểm đo, kỹ thuật lấy mẫu,
                tình trạng que thử và việc ghi chép kết quả</strong>.
            </p>

            <p>
                Thay vì chỉ quan tâm đến một con số riêng lẻ, hãy theo dõi kết quả theo thời gian và trao đổi với
                nhân viên y tế khi có những thay đổi bất thường.
            </p>

            <p class="blog-highlight">
                <em>Nhà Thuốc An Đức 6 chia sẻ các thông tin sức khỏe nhằm giúp bạn có thêm kiến thức tham khảo
                và chủ động hơn trong việc chăm sóc bản thân và gia đình.</em>
            </p>
        `
    }

    ,{
        id: "bai-viet-5",

        category: "Dinh dưỡng",

        title: "Canxi, vitamin D3 và K2: Dùng thế nào cho đúng?",

        image: "images/canxi_vitamin_d2_k3_dung_the_nao.webp",

        excerpt: "Canxi, vitamin D3 và K2 có vai trò gì? Tìm hiểu cách bổ sung đúng, thời điểm sử dụng, liều lượng tham khảo và những lưu ý khi dùng canxi D3 K2.",

        content: `
            <p>Canxi, vitamin D và vitamin K đều là những dưỡng chất có vai trò đối với sức khỏe xương. Trong đó, <strong>canxi là khoáng chất cấu tạo nên xương và răng</strong>, vitamin D giúp cơ thể hấp thu canxi, còn vitamin K tham gia vào quá trình đông máu và có vai trò đối với sức khỏe xương.</p>
            <p>Vì có những vai trò liên quan với nhau, nhiều sản phẩm bổ sung dinh dưỡng kết hợp <strong>Canxi + Vitamin D3 + Vitamin K2</strong> trong cùng một công thức.</p>
            <p>Tuy nhiên, bổ sung không có nghĩa là dùng càng nhiều càng tốt. Nhu cầu dinh dưỡng thay đổi theo tuổi, chế độ ăn, tình trạng sức khỏe và từng đối tượng.</p>

            <h3>1. Canxi có tác dụng gì?</h3>
            <p>Canxi là khoáng chất có nhiều nhất trong cơ thể. Phần lớn canxi được lưu trữ trong xương và răng, góp phần tạo nên cấu trúc và độ chắc khỏe của chúng. Ngoài xương và răng, cơ thể còn cần canxi cho hoạt động của cơ bắp, thần kinh, mạch máu và một số quá trình sinh lý khác.</p>

            <h4>Nhu cầu canxi theo độ tuổi</h4>
            <p>Nhu cầu canxi hằng ngày thay đổi theo từng giai đoạn:</p>
            <div class="blog-table-wrap">
                <table>
                    <thead><tr><th>Đối tượng</th><th>Lượng canxi khuyến nghị/ngày</th></tr></thead>
                    <tbody><tr><td>Trẻ 1–3 tuổi</td><td>700 mg</td></tr><tr><td>Trẻ 4–8 tuổi</td><td>1.000 mg</td></tr><tr><td>Trẻ 9–13 tuổi</td><td>1.300 mg</td></tr><tr><td>Thanh thiếu niên 14–18 tuổi</td><td>1.300 mg</td></tr><tr><td>Người lớn 19–50 tuổi</td><td>1.000 mg</td></tr><tr><td>Nam 51–70 tuổi</td><td>1.000 mg</td></tr><tr><td>Nữ 51–70 tuổi</td><td>1.200 mg</td></tr><tr><td>Người từ 71 tuổi trở lên</td><td>1.200 mg</td></tr></tbody>
                </table>
            </div>
            <p>Các con số trên là tổng lượng canxi từ <strong>thực phẩm và thực phẩm bổ sung</strong>, nếu có.</p>
            <p><em>Nguồn số liệu: NIH Office of Dietary Supplements (Hoa Kỳ).</em></p>

            <h4>Không phải lúc nào cũng cần uống thêm canxi</h4>
            <p>Sữa, sữa chua, phô mai và một số loại thực phẩm khác có thể cung cấp lượng canxi đáng kể. Vì vậy, trước khi bổ sung, nên xem xét tổng lượng canxi nhận được từ chế độ ăn thay vì mặc định rằng mọi người đều cần uống thêm canxi.</p>

            <h3>2. Vitamin D3 có vai trò gì?</h3>
            <p>Vitamin D giúp cơ thể <strong>hấp thu canxi ở đường tiêu hóa</strong> và góp phần duy trì nồng độ canxi phù hợp trong cơ thể. Đây là lý do vitamin D thường xuất hiện cùng canxi trong các sản phẩm bổ sung cho xương. Vitamin D có thể đến từ thực phẩm, ánh nắng và thực phẩm bổ sung.</p>

            <h4>Nhu cầu vitamin D tham khảo</h4>
            <div class="blog-table-wrap">
                <table>
                    <thead><tr><th>Đối tượng</th><th>Lượng vitamin D khuyến nghị/ngày</th></tr></thead>
                    <tbody><tr><td>Trẻ 1–13 tuổi</td><td>600 IU</td></tr><tr><td>Thanh thiếu niên 14–18 tuổi</td><td>600 IU</td></tr><tr><td>Người lớn 19–70 tuổi</td><td>600 IU</td></tr><tr><td>Người trên 70 tuổi</td><td>800 IU</td></tr><tr><td>Phụ nữ mang thai/cho con bú</td><td>600 IU</td></tr></tbody>
                </table>
            </div>
            <p>Đây là mức khuyến nghị chung cho người khỏe mạnh; nhu cầu cụ thể có thể khác trong một số tình trạng sức khỏe.</p>
            <p><em>Nguồn số liệu: NIH Office of Dietary Supplements (Hoa Kỳ).</em></p>

            <h4>Có nên tự dùng vitamin D liều cao?</h4>
            <p>Không nên tự ý sử dụng vitamin D liều cao trong thời gian dài. Đối với người trưởng thành, mức dung nạp tối đa được thiết lập là <strong>4.000 IU/ngày từ tất cả các nguồn</strong>, trừ trường hợp sử dụng liều cao theo chỉ định và theo dõi của nhân viên y tế. Dùng quá nhiều vitamin D có thể làm tăng canxi máu và gây các vấn đề sức khỏe.</p>

            <h3>3. Vitamin K2 có vai trò gì?</h3>
            <p>Vitamin K là dưỡng chất cần thiết cho quá trình đông máu và có vai trò đối với sức khỏe xương. K2 là một nhóm dạng của vitamin K, trong đó MK-7 là một dạng thường gặp trong các sản phẩm bổ sung. Vitamin K có thể được cung cấp từ thực phẩm, đặc biệt là các loại rau xanh, ngoài ra còn có trong một số thực phẩm khác và thực phẩm bổ sung.</p>

            <h4>Nhu cầu vitamin K tham khảo</h4>
            <div class="blog-table-wrap">
                <table>
                    <thead><tr><th>Đối tượng</th><th>Lượng vitamin K/ngày</th></tr></thead>
                    <tbody><tr><td>Nam từ 19 tuổi</td><td>120 mcg</td></tr><tr><td>Nữ từ 19 tuổi</td><td>90 mcg</td></tr><tr><td>Thanh thiếu niên nam 14–18 tuổi</td><td>75 mcg</td></tr><tr><td>Thanh thiếu niên nữ 14–18 tuổi</td><td>75 mcg</td></tr></tbody>
                </table>
            </div>
            <p>Đây là mức tham khảo về tổng lượng vitamin K cần thiết hằng ngày.</p>
            <p><em>Nguồn số liệu: NIH Office of Dietary Supplements (Hoa Kỳ).</em></p>

            <h3>4. Có nên dùng Canxi + D3 + K2 cùng nhau?</h3>
            <p>Có thể sử dụng các dưỡng chất này trong cùng một sản phẩm nếu công thức và liều lượng phù hợp với nhu cầu. Về mặt sinh lý:</p>
            <ul>
                <li><strong>Canxi:</strong> cung cấp khoáng chất cần thiết cho xương và nhiều chức năng khác.</li>
                <li><strong>Vitamin D3:</strong> hỗ trợ hấp thu canxi.</li>
                <li><strong>Vitamin K:</strong> tham gia vào các quá trình liên quan đến protein phụ thuộc vitamin K, trong đó có những protein liên quan đến xương.</li>
            </ul>
            <p>Tuy nhiên, không nên hiểu rằng <strong>cứ bổ sung cả ba chất thì xương chắc khỏe hơn</strong>. Hiệu quả phụ thuộc vào tổng chế độ dinh dưỡng, tình trạng thiếu hụt, tuổi, sức khỏe và nhiều yếu tố khác.</p>

            <h3>5. Canxi nên uống lúc nào?</h3>
            <p>Thời điểm sử dụng phụ thuộc vào loại canxi.</p>

            <h4>Canxi carbonate</h4>
            <p>Canxi carbonate được hấp thu tốt hơn khi dùng <strong>cùng bữa ăn</strong>.</p>

            <h4>Canxi citrate</h4>
            <p>Canxi citrate không phụ thuộc nhiều vào acid dạ dày và có thể được sử dụng khi no hoặc đói.</p>

            <h4>Không nên uống một lượng canxi quá lớn cùng lúc</h4>
            <p>Cơ thể hấp thu canxi hiệu quả hơn khi lượng bổ sung trong một lần không quá cao. NIH khuyến nghị các sản phẩm bổ sung canxi thường được hấp thu tốt hơn khi dùng <strong>500 mg hoặc ít hơn mỗi lần</strong>. Vì vậy, nếu tổng lượng canxi cần bổ sung trong ngày cao, có thể cần chia thành nhiều lần theo hướng dẫn trên sản phẩm hoặc của nhân viên y tế.</p>

            <h3>6. Vitamin D3 nên uống như thế nào?</h3>
            <p>Vitamin D là vitamin tan trong chất béo. Khi sử dụng thực phẩm bổ sung, nên tuân thủ liều trên nhãn hoặc hướng dẫn của nhân viên y tế. Một số sản phẩm vitamin D được thiết kế để sử dụng hằng ngày, trong khi một số sản phẩm có hàm lượng cao hơn và cách dùng khác.</p>
            <p class="blog-highlight"><strong>Không nên tự tăng liều chỉ vì nghĩ rằng vitamin D càng nhiều càng tốt.</strong></p>
            <p>Nếu đang điều trị thiếu vitamin D, liều dùng có thể cao hơn mức khuyến nghị thông thường nhưng cần được nhân viên y tế hướng dẫn.</p>

            <h3>7. Vitamin K2 nên uống như thế nào?</h3>
            <p>Vitamin K có thể được cung cấp từ chế độ ăn và thực phẩm bổ sung. Khi sử dụng sản phẩm có K2, nên:</p>
            <ul>
                <li>Kiểm tra hàm lượng vitamin K2 trên nhãn.</li>
                <li>Dùng đúng liều được hướng dẫn.</li>
                <li>Không tự ý tăng liều.</li>
                <li>Đặc biệt lưu ý nếu đang sử dụng thuốc chống đông máu.</li>
            </ul>

            <h4>Người đang dùng warfarin cần đặc biệt lưu ý</h4>
            <p>Vitamin K có thể tương tác nghiêm trọng với <strong>warfarin</strong> và một số thuốc chống đông tương tự. Nếu đang dùng warfarin, lượng vitamin K từ thực phẩm và thực phẩm bổ sung cần được duy trì tương đối ổn định. Không nên tự ý bắt đầu hoặc ngừng sản phẩm chứa vitamin K mà chưa trao đổi với bác sĩ hoặc dược sĩ.</p>

            <h3>8. Những ai cần thận trọng khi bổ sung Canxi – D3 – K2?</h3>
            <p>Không nên tự bổ sung liều cao nếu thuộc một trong những trường hợp sau:</p>
            <ul>
                <li>Có bệnh thận hoặc tiền sử sỏi thận.</li>
                <li>Có vấn đề liên quan đến nồng độ canxi trong máu.</li>
                <li>Đang điều trị bệnh tuyến cận giáp.</li>
                <li>Đang sử dụng thuốc chống đông như warfarin.</li>
                <li>Đang dùng nhiều loại thuốc cùng lúc.</li>
                <li>Đang mang thai hoặc cho con bú.</li>
                <li>Trẻ em cần sử dụng sản phẩm có hàm lượng dành cho trẻ.</li>
                <li>Đang được điều trị thiếu vitamin D hoặc các vấn đề về xương.</li>
            </ul>
            <p>Canxi và vitamin D cũng có thể tương tác với một số thuốc. Ví dụ, canxi có thể ảnh hưởng đến sự hấp thu của một số thuốc như levothyroxine, dolutegravir và một số kháng sinh nhóm quinolone. Nếu đang sử dụng thuốc điều trị lâu dài, nên hỏi bác sĩ hoặc dược sĩ về khoảng cách thời gian giữa thuốc và sản phẩm bổ sung.</p>

            <h3>9. Dùng Canxi – D3 – K2 có cần ăn uống đầy đủ không?</h3>
            <p>Có. Thực phẩm bổ sung không thay thế một chế độ ăn đa dạng. Một chế độ ăn phù hợp có thể cung cấp canxi và nhiều dưỡng chất khác thông qua:</p>
            <ul>
                <li>Sữa và các sản phẩm từ sữa.</li>
                <li>Cá nhỏ có thể ăn cả xương.</li>
                <li>Rau xanh.</li>
                <li>Đậu phụ và một số sản phẩm bổ sung canxi.</li>
                <li>Cá béo và các thực phẩm có vitamin D.</li>
                <li>Các loại thực phẩm đa dạng khác.</li>
            </ul>
            <p>NIH khuyến nghị nhu cầu dinh dưỡng nên được đáp ứng chủ yếu từ thực phẩm; thực phẩm bổ sung có thể hữu ích khi chế độ ăn không đáp ứng đủ hoặc trong những trường hợp cụ thể.</p>

            <h3>10. Những sai lầm thường gặp khi bổ sung Canxi – D3 – K2</h3>
            <ul>
                <li><strong>Uống càng nhiều càng tốt:</strong> không đúng. Dùng quá nhiều canxi hoặc vitamin D có thể gây tác dụng không mong muốn. Bổ sung nên dựa trên nhu cầu thực tế.</li>
                <li><strong>Chỉ uống canxi mà bỏ qua chế độ ăn:</strong> tổng lượng canxi trong ngày bao gồm cả lượng từ thực phẩm và thực phẩm bổ sung.</li>
                <li><strong>Tự dùng vitamin D liều cao kéo dài:</strong> vitamin D quá mức có thể dẫn đến tăng canxi máu và các biến chứng nghiêm trọng.</li>
                <li><strong>Dùng K2 mà không kiểm tra thuốc đang sử dụng:</strong> đây là điều đặc biệt cần lưu ý ở người đang sử dụng warfarin hoặc thuốc chống đông tương tự.</li>
            </ul>

            <h3>11. Gợi ý cách sử dụng trong ngày</h3>
            <p>Không có một lịch uống Canxi – D3 – K2 áp dụng cho tất cả mọi người. Cách dùng cần căn cứ vào <strong>dạng sản phẩm, hàm lượng và hướng dẫn của nhà sản xuất</strong>. Một nguyên tắc đơn giản có thể tham khảo:</p>
            <ul>
                <li><strong>Bữa ăn:</strong> cung cấp canxi và vitamin D từ thực phẩm.</li>
                <li><strong>Sản phẩm bổ sung:</strong> sử dụng đúng liều và đúng thời điểm ghi trên nhãn.</li>
                <li><strong>Thuốc đang điều trị:</strong> kiểm tra tương tác và khoảng cách dùng nếu cần.</li>
                <li><strong>Theo dõi:</strong> đánh giá nhu cầu bổ sung thay vì tự tăng liều.</li>
            </ul>

            <h3>Câu hỏi thường gặp</h3>

            <h4>Canxi có nên uống cùng vitamin D3 không?</h4>
            <p>Có thể. Vitamin D giúp cơ thể hấp thu canxi và vì vậy hai dưỡng chất này thường được kết hợp trong các sản phẩm bổ sung.</p>

            <h4>Có nhất thiết phải bổ sung thêm K2 khi uống canxi không?</h4>
            <p>Không phải ai uống canxi cũng bắt buộc phải bổ sung K2. Nhu cầu vitamin K có thể được đáp ứng thông qua chế độ ăn và tùy từng trường hợp mới cần sản phẩm bổ sung.</p>

            <h4>Canxi uống buổi sáng hay buổi tối tốt hơn?</h4>
            <p>Không có một thời điểm duy nhất phù hợp cho tất cả mọi người. Với canxi carbonate, dùng cùng bữa ăn giúp hấp thu tốt hơn. Quan trọng là sử dụng đúng dạng canxi và hướng dẫn trên sản phẩm.</p>

            <h4>Có thể uống Canxi – D3 – K2 cùng một lúc không?</h4>
            <p>Nhiều sản phẩm được thiết kế để cung cấp cả ba thành phần trong cùng một lần sử dụng. Tuy nhiên, cần tuân thủ hướng dẫn của từng sản phẩm và kiểm tra các thuốc đang sử dụng.</p>

            <h4>Uống canxi có gây sỏi thận không?</h4>
            <p>Bổ sung canxi quá mức có thể làm tăng nguy cơ sỏi thận ở một số trường hợp. Vì vậy không nên tự sử dụng liều cao kéo dài, đặc biệt nếu có tiền sử sỏi thận hoặc bệnh thận.</p>

            <h4>Người đang uống thuốc chống đông có dùng K2 được không?</h4>
            <p>Cần hỏi bác sĩ hoặc dược sĩ trước khi sử dụng. Vitamin K có tương tác đáng kể với warfarin và việc thay đổi lượng vitamin K đột ngột có thể ảnh hưởng đến tác dụng chống đông.</p>

            <h4>Trẻ em có thể dùng Canxi – D3 – K2 của người lớn không?</h4>
            <p>Không nên tự ý sử dụng sản phẩm dành cho người lớn cho trẻ em. Nhu cầu dinh dưỡng và giới hạn sử dụng thay đổi theo tuổi.</p>

            <h3>Kết luận</h3>
            <p><strong>Canxi, vitamin D3 và K2 đều có vai trò riêng đối với cơ thể và sức khỏe xương.</strong> Sử dụng đúng không chỉ là chọn sản phẩm có đủ ba thành phần mà còn phải chú ý đến tổng lượng dưỡng chất từ chế độ ăn, hàm lượng sản phẩm, thời điểm sử dụng và tình trạng sức khỏe của từng người.</p>
            <p>Nếu cần bổ sung, hãy <strong>đọc kỹ nhãn sản phẩm, dùng đúng hướng dẫn và tham khảo bác sĩ hoặc dược sĩ khi đang điều trị bệnh hoặc sử dụng thuốc lâu dài</strong>.</p>
            <p class="blog-highlight"><strong>Lưu ý:</strong> Nội dung trên nhằm cung cấp thông tin sức khỏe tham khảo, không thay thế chẩn đoán hoặc hướng dẫn điều trị của nhân viên y tế.</p>
        `
    }

    ,{
        id: "bai-viet-6",

        category: "Dinh dưỡng",

        title: "Collagen: Bằng chứng khoa học nói gì?",

        image: "images/bai_viet_6.webp",

        excerpt: "Collagen là gì? Uống collagen có thực sự tốt cho da và khớp? Cùng Nhà Thuốc An Đức 6 tìm hiểu bằng chứng từ các nghiên cứu và tổng quan khoa học mới nhất.",

        content: `
            <p>Collagen thường được nhắc đến trong các sản phẩm chăm sóc da, làm đẹp và hỗ trợ sức khỏe xương khớp. Trên thị trường, collagen được quảng bá với nhiều công dụng như giúp da căng mịn, tăng độ đàn hồi, giảm nếp nhăn hoặc hỗ trợ khớp.</p>
            <p>Nhưng <strong>bằng chứng khoa học thực sự nói gì?</strong></p>
            <p>Các nghiên cứu trên người đã cho thấy một số kết quả tích cực, đặc biệt đối với <strong>độ ẩm và độ đàn hồi của da</strong>, cũng như một số triệu chứng liên quan đến <strong>thoái hóa khớp</strong>. Tuy nhiên, kết quả giữa các nghiên cứu không hoàn toàn thống nhất và chất lượng bằng chứng còn khác nhau.</p>
            <p>Vì vậy, thay vì chỉ nhìn vào quảng cáo, hãy cùng tìm hiểu collagen dưới góc nhìn khoa học.</p>

            <h3>1. Collagen là gì?</h3>
            <p>Collagen là một loại protein cấu trúc quan trọng trong cơ thể, có mặt ở da, xương, sụn, gân, dây chằng và nhiều mô liên kết khác. Theo thời gian, quá trình tổng hợp collagen trong cơ thể thay đổi cùng với quá trình lão hóa. Đây là một trong nhiều yếu tố liên quan đến những thay đổi của da và hệ vận động.</p>
            <p>Collagen trong thực phẩm bổ sung thường tồn tại dưới dạng:</p>
            <ul>
                <li><strong>Collagen hydrolysate (collagen thủy phân)</strong></li>
                <li><strong>Collagen peptides (peptide collagen)</strong></li>
                <li>Gelatin</li>
                <li>Một số dạng peptide collagen chuyên biệt</li>
            </ul>
            <p>Collagen thủy phân được chia nhỏ thành các peptide và amino acid giúp quá trình tiêu hóa, hấp thu thuận lợi hơn.</p>
            <p>Một nghiên cứu trên người cho thấy sau khi sử dụng collagen hydrolysate, các amino acid và peptide chứa hydroxyproline có thể xuất hiện trong máu. Điều này cho thấy collagen ăn vào không đơn giản là “đi thẳng vào da”, mà trước hết được tiêu hóa và hấp thu dưới dạng các thành phần nhỏ hơn.</p>

            <h3>2. Uống collagen có giúp cơ thể hấp thu collagen không?</h3>
            <p><strong>Có hấp thu các thành phần từ collagen, nhưng không nên hiểu là collagen uống vào sẽ được vận chuyển nguyên vẹn đến da.</strong></p>
            <p>Sau khi ăn hoặc uống, collagen được tiêu hóa thành amino acid và các peptide nhỏ. Một số peptide chứa hydroxyproline có thể được phát hiện trong máu sau khi sử dụng collagen hydrolysate. Tuy nhiên, việc các peptide này xuất hiện trong máu <strong>không đồng nghĩa với việc chắc chắn chúng sẽ tạo ra hiệu quả làm đẹp hoặc chống lão hóa rõ rệt</strong>. Đây là điểm quan trọng khi đọc quảng cáo về collagen.</p>
            <p class="blog-highlight"><strong>Hấp thu được ≠ chắc chắn có hiệu quả lâm sàng.</strong></p>
            <p>Để khẳng định collagen có tác dụng đối với một vấn đề cụ thể, cần dựa vào các thử nghiệm lâm sàng trên người chứ không chỉ dựa vào nghiên cứu hấp thu hoặc nghiên cứu trong phòng thí nghiệm.</p>

            <h3>3. Collagen có thực sự tốt cho da?</h3>
            <p>Đây là lĩnh vực được nghiên cứu nhiều nhất.</p>
            <p>Một phân tích tổng hợp năm 2023 bao gồm <strong>26 thử nghiệm ngẫu nhiên có đối chứng với 1.721 người tham gia</strong> cho thấy collagen thủy phân có liên quan đến sự cải thiện về <strong>độ ẩm và độ đàn hồi của da</strong> so với giả dược. Tuy nhiên, chính các tác giả cũng lưu ý về những hạn chế và sự cần thiết của các thử nghiệm lớn hơn, chất lượng cao hơn.</p>
            <p>Một tổng quan hệ thống khác cũng ghi nhận nhiều nghiên cứu cho thấy cải thiện độ ẩm và độ đàn hồi da sau khi bổ sung collagen, nhưng phần lớn thử nghiệm có những vấn đề về nguy cơ sai lệch và cần thêm nghiên cứu dài hạn, được thiết kế tốt hơn.</p>

            <h4>Vậy collagen có thể tác động đến những yếu tố nào của da?</h4>
            <div class="blog-table-wrap">
                <table>
                    <thead><tr><th>Yếu tố</th><th>Bằng chứng hiện có</th></tr></thead>
                    <tbody><tr><td>Độ ẩm da</td><td>Có tín hiệu tích cực trong nhiều nghiên cứu</td></tr><tr><td>Độ đàn hồi</td><td>Có tín hiệu tích cực</td></tr><tr><td>Nếp nhăn</td><td>Kết quả chưa thống nhất</td></tr><tr><td>Độ nhám bề mặt da</td><td>Bằng chứng còn hạn chế</td></tr><tr><td>“Trẻ hóa da” toàn diện</td><td>Chưa đủ bằng chứng để khẳng định</td></tr><tr><td>Tái tạo collagen theo nghĩa quảng cáo</td><td>Không nên hiểu đơn giản như vậy</td></tr></tbody>
                </table>
            </div>

            <h3>4. Nhưng các nghiên cứu về collagen lại cho kết quả trái chiều</h3>
            <p>Đây là phần rất đáng chú ý.</p>
            <p>Một phân tích tổng hợp được công bố trên <em>The American Journal of Medicine</em> năm 2025 xem xét <strong>23 thử nghiệm ngẫu nhiên với 1.474 người tham gia</strong>. Khi gộp tất cả nghiên cứu, collagen cho thấy sự cải thiện về độ ẩm, độ đàn hồi và nếp nhăn.</p>
            <p>Tuy nhiên, khi các tác giả phân tích theo <strong>nguồn tài trợ và chất lượng nghiên cứu</strong>, kết quả trở nên khác biệt: những nghiên cứu không nhận tài trợ từ các công ty dược phẩm không cho thấy hiệu quả đáng kể đối với độ ẩm, độ đàn hồi và nếp nhăn; các nghiên cứu chất lượng cao cũng không cho thấy hiệu quả có ý nghĩa thống kê ở các tiêu chí này. Tác giả kết luận rằng bằng chứng lâm sàng hiện tại chưa đủ để khẳng định collagen có tác dụng phòng ngừa hoặc điều trị lão hóa da.</p>
            <p>Điều này không có nghĩa là <strong>“collagen chắc chắn không có tác dụng”</strong>. Nó cho thấy rằng:</p>
            <p class="blog-highlight"><strong>Kết quả nghiên cứu hiện nay chưa đủ nhất quán để đưa ra những tuyên bố mạnh như “uống collagen sẽ xóa nếp nhăn” hoặc “chống lão hóa chắc chắn”.</strong></p>
            <p>Đây cũng là lý do người đọc nên quan tâm đến <strong>chất lượng nghiên cứu</strong>, chứ không chỉ nhìn vào số lượng nghiên cứu.</p>

            <h3>5. Collagen có hỗ trợ xương khớp không?</h3>
            <p>Ngoài da, collagen còn được nghiên cứu khá nhiều trong lĩnh vực cơ xương khớp.</p>
            <p>Một phân tích tổng hợp cập nhật về collagen và <strong>thoái hóa khớp gối</strong> gồm 11 thử nghiệm ngẫu nhiên với 870 người tham gia ghi nhận sự cải thiện về điểm đau và chức năng so với nhóm đối chứng. Tuy nhiên, mức độ khác biệt giữa các nghiên cứu khá lớn.</p>
            <p>Một phân tích tổng hợp khác gồm <strong>35 thử nghiệm ngẫu nhiên với 3.165 người</strong> cũng ghi nhận collagen derivatives có tác động nhỏ đến vừa đối với giảm đau và cải thiện chức năng ở người bị thoái hóa khớp; nghiên cứu này đánh giá độ chắc chắn của bằng chứng khác nhau tùy từng kết quả.</p>

            <h4>Điều này có ý nghĩa gì?</h4>
            <p>Collagen có thể là một <strong>lựa chọn bổ sung</strong> được nghiên cứu ở người có vấn đề về khớp. Nhưng không nên hiểu rằng collagen:</p>
            <ul>
                <li>Chữa khỏi thoái hóa khớp</li>
                <li>Tái tạo sụn chắc chắn</li>
                <li>Thay thế thuốc điều trị</li>
                <li>Thay thế vật lý trị liệu hoặc vận động phù hợp</li>
            </ul>
            <p>Nếu đang có đau khớp kéo dài hoặc hạn chế vận động, việc đánh giá nguyên nhân vẫn quan trọng hơn việc chỉ sử dụng thực phẩm bổ sung.</p>

            <h3>6. Collagen cá, bò hay heo tốt hơn?</h3>
            <p>Collagen thương mại có thể được sản xuất từ nhiều nguồn như:</p>
            <ul>
                <li>Cá</li>
                <li>Bò</li>
                <li>Heo</li>
                <li>Gà</li>
            </ul>
            <p>Một số người lựa chọn collagen biển vì nguồn nguyên liệu hoặc sở thích cá nhân. Tuy nhiên, <strong>không nên mặc định rằng collagen cá luôn tốt hơn collagen bò hoặc collagen heo</strong>.</p>
            <p>Một phân tích tổng hợp năm 2023 không tìm thấy sự khác biệt có ý nghĩa thống kê rõ ràng về tác động lên độ đàn hồi da giữa các nguồn collagen khác nhau. Quan trọng hơn là:</p>
            <p class="blog-highlight"><strong>nguồn nguyên liệu + dạng collagen + hàm lượng + chất lượng sản phẩm + bằng chứng của chính công thức đó.</strong></p>

            <h3>7. Bao nhiêu collagen mỗi ngày?</h3>
            <p>Các thử nghiệm lâm sàng về collagen sử dụng khá nhiều mức liều và công thức khác nhau. Một số nghiên cứu về da sử dụng khoảng <strong>2,5–10 g collagen hydrolysate mỗi ngày</strong>, trong thời gian từ vài tuần đến vài tháng. Một phân tích tổng hợp khác ghi nhận nhiều nghiên cứu sử dụng khoảng vài gram collagen mỗi ngày.</p>
            <p>Tuy nhiên, <strong>không có một mức liều duy nhất có thể áp dụng cho tất cả mọi người</strong>. Khi lựa chọn sản phẩm, nên xem:</p>
            <ol>
                <li>Hàm lượng collagen thực tế mỗi khẩu phần.</li>
                <li>Dạng collagen sử dụng.</li>
                <li>Nguồn nguyên liệu.</li>
                <li>Thành phần đi kèm.</li>
                <li>Hướng dẫn sử dụng của nhà sản xuất.</li>
                <li>Thông tin về nguồn gốc và chất lượng sản phẩm.</li>
            </ol>
            <p>Không nên cho rằng sản phẩm có hàm lượng collagen càng cao thì chắc chắn càng hiệu quả.</p>

            <h3>8. Uống collagen bao lâu mới có thể đánh giá?</h3>
            <p>Đây cũng là điểm dễ bị hiểu sai. Các nghiên cứu về da thường theo dõi người tham gia trong <strong>nhiều tuần</strong>, không phải chỉ vài ngày. Một số nghiên cứu ghi nhận kết quả sau khoảng 4–12 tuần hoặc lâu hơn, nhưng thời gian và kết quả khác nhau tùy công thức và tiêu chí đánh giá.</p>
            <p class="blog-highlight"><strong>Không nên kỳ vọng uống collagen vài ngày sẽ nhìn thấy thay đổi rõ rệt trên da.</strong></p>
            <p>Đồng thời, nếu sử dụng lâu dài mà không nhận thấy lợi ích, cũng không nên tự động tăng liều chỉ vì nghĩ rằng “uống càng nhiều càng tốt”.</p>

            <h3>9. Collagen có an toàn không?</h3>
            <p>Nhìn chung, collagen hydrolysate trong các thử nghiệm lâm sàng thường được dung nạp tương đối tốt và các nghiên cứu không cho thấy tín hiệu rõ ràng về việc làm tăng biến cố bất lợi so với nhóm đối chứng.</p>
            <p>Tuy nhiên, mức độ an toàn còn phụ thuộc vào <strong>toàn bộ sản phẩm</strong>, không chỉ riêng collagen. Ví dụ, sản phẩm có thể chứa thêm:</p>
            <ul>
                <li>Vitamin</li>
                <li>Khoáng chất</li>
                <li>Hyaluronic acid</li>
                <li>Chiết xuất thực vật</li>
                <li>Chất tạo ngọt</li>
                <li>Thành phần có nguồn gốc từ cá hoặc động vật</li>
            </ul>
            <p>Do đó, người có dị ứng với nguồn nguyên liệu nhất định cần kiểm tra kỹ nhãn sản phẩm. Đặc biệt, người đang mang thai, cho con bú, có bệnh lý nền hoặc đang sử dụng nhiều thuốc nên trao đổi với bác sĩ hoặc dược sĩ trước khi dùng các sản phẩm bổ sung kéo dài.</p>

            <h3>10. Có cần uống collagen nếu ăn uống đầy đủ?</h3>
            <p><strong>Không phải ai cũng cần bổ sung collagen.</strong></p>
            <p>Cơ thể có khả năng tự tổng hợp collagen từ các amino acid và các chất dinh dưỡng cần thiết. Một chế độ ăn đa dạng, cung cấp đủ protein và các vitamin, khoáng chất cần thiết vẫn là nền tảng quan trọng đối với sức khỏe da, xương và mô liên kết.</p>
            <p>Collagen dạng thực phẩm bổ sung nên được xem là <strong>một lựa chọn bổ sung</strong>, không phải nền tảng duy nhất để chăm sóc sức khỏe.</p>

            <h3>11. Những hiểu lầm phổ biến về collagen</h3>

            <h4>❌ “Uống collagen sẽ đi thẳng vào da”</h4>
            <p>Không chính xác. Collagen được tiêu hóa và hấp thu dưới dạng amino acid và peptide. Một số peptide đặc trưng có thể xuất hiện trong máu sau khi uống collagen.</p>

            <h4>❌ “Collagen chắc chắn xóa nếp nhăn”</h4>
            <p>Chưa có đủ bằng chứng để khẳng định mạnh như vậy. Các nghiên cứu về nếp nhăn cho kết quả không hoàn toàn nhất quán và chịu ảnh hưởng bởi chất lượng nghiên cứu.</p>

            <h4>❌ “Collagen càng nhiều càng tốt”</h4>
            <p>Không có cơ sở để khẳng định điều này. Các nghiên cứu sử dụng nhiều mức liều khác nhau và hiệu quả không đơn giản chỉ phụ thuộc vào việc tăng liều.</p>

            <h4>❌ “Collagen biển luôn tốt nhất”</h4>
            <p>Chưa có đủ bằng chứng để kết luận collagen từ cá luôn vượt trội các nguồn khác về hiệu quả trên da.</p>

            <h4>❌ “Uống collagen thay được chế độ ăn”</h4>
            <p>Không. Thực phẩm bổ sung không thay thế một chế độ ăn đa dạng và cân bằng.</p>

            <h3>12. Vậy có nên uống collagen không?</h3>
            <p>Nếu mục tiêu là chăm sóc da hoặc hỗ trợ sức khỏe khớp, collagen là một trong những nhóm thực phẩm bổ sung đã được nghiên cứu trên người. <strong>Bằng chứng hiện tại cho thấy:</strong></p>
            <ul>
                <li>Có tín hiệu tích cực đối với <strong>độ ẩm da</strong>.</li>
                <li>Có tín hiệu tích cực đối với <strong>độ đàn hồi da</strong>.</li>
                <li>Có một số bằng chứng về việc cải thiện <strong>đau và chức năng ở người bị thoái hóa khớp</strong>.</li>
                <li>Hiệu quả đối với <strong>nếp nhăn và “chống lão hóa” vẫn còn tranh luận</strong>.</li>
                <li>Chất lượng nghiên cứu và nguồn tài trợ có thể ảnh hưởng đáng kể đến kết quả.</li>
                <li>Chưa có cơ sở để xem collagen như một phương pháp điều trị bệnh.</li>
            </ul>
            <p>Một tổng quan hệ thống gần đây cũng cho thấy lĩnh vực này vẫn cần các thử nghiệm lớn hơn, được chuẩn hóa tốt hơn và có thời gian theo dõi dài hơn.</p>

            <h3>13. Cách tiếp cận hợp lý khi lựa chọn collagen</h3>
            <p>Thay vì chỉ hỏi:</p>
            <p class="blog-highlight">“Collagen nào tốt nhất?”</p>
            <p>Có thể đặt ra những câu hỏi thực tế hơn:</p>
            <ol>
                <li><strong>Sản phẩm chứa bao nhiêu collagen?</strong><br>Kiểm tra hàm lượng collagen thực tế thay vì chỉ nhìn tên sản phẩm.</li>
                <li><strong>Collagen có nguồn gốc từ đâu?</strong><br>Cá, bò, heo hoặc nguồn khác.</li>
                <li><strong>Dạng collagen là gì?</strong><br>Collagen hydrolysate/peptide thường được sử dụng trong nhiều thử nghiệm lâm sàng về bổ sung collagen.</li>
                <li><strong>Sản phẩm có thêm thành phần gì?</strong><br>Cần đọc toàn bộ bảng thành phần thay vì chỉ chú ý đến collagen.</li>
                <li><strong>Mục tiêu sử dụng là gì?</strong><br>Chăm sóc da, bổ sung protein hay hỗ trợ sức khỏe khớp sẽ có cách đánh giá khác nhau.</li>
            </ol>

            <h3>14. Câu hỏi thường gặp</h3>

            <h4>Uống collagen có thật sự giúp da đẹp hơn không?</h4>
            <p>Một số nghiên cứu cho thấy collagen peptide có thể cải thiện một số chỉ số như độ ẩm và độ đàn hồi da. Tuy nhiên, bằng chứng về chống lão hóa và giảm nếp nhăn vẫn chưa hoàn toàn thống nhất.</p>

            <h4>Bao lâu thì collagen có thể phát huy tác dụng?</h4>
            <p>Các thử nghiệm thường kéo dài từ vài tuần đến vài tháng. Không nên kỳ vọng thay đổi rõ rệt chỉ sau vài ngày.</p>

            <h4>Collagen có giúp giảm đau khớp không?</h4>
            <p>Một số phân tích tổng hợp các thử nghiệm ngẫu nhiên cho thấy collagen derivatives có thể cải thiện đau và chức năng ở người bị thoái hóa khớp. Tuy nhiên, collagen không thay thế việc chẩn đoán và điều trị nguyên nhân.</p>

            <h4>Collagen cá có tốt hơn collagen bò không?</h4>
            <p>Chưa có bằng chứng đủ mạnh để khẳng định một nguồn collagen luôn vượt trội nguồn khác về hiệu quả trên da.</p>

            <h4>Có nên uống collagen liên tục không?</h4>
            <p>Việc sử dụng lâu dài nên dựa trên nhu cầu, sản phẩm cụ thể và tình trạng sức khỏe. Nếu đang dùng nhiều thực phẩm bổ sung hoặc thuốc, nên hỏi bác sĩ/dược sĩ để đánh giá phù hợp.</p>

            <h3>Kết luận</h3>
            <p><strong>Collagen không phải “thần dược” làm đẹp, nhưng cũng không phải một sản phẩm hoàn toàn không có cơ sở khoa học.</strong></p>
            <p>Các nghiên cứu lâm sàng đã ghi nhận một số tín hiệu tích cực, đặc biệt đối với <strong>độ ẩm và độ đàn hồi của da</strong>, đồng thời có bằng chứng về lợi ích nhất định đối với <strong>đau và chức năng khớp</strong>. Tuy nhiên, kết quả giữa các nghiên cứu vẫn còn khác nhau. Đặc biệt, các tuyên bố mạnh về <strong>xóa nếp nhăn, chống lão hóa hoặc tái tạo collagen</strong> cần được nhìn nhận thận trọng.</p>
            <p>Cách tiếp cận hợp lý nhất là xem collagen như <strong>một lựa chọn bổ sung</strong>, đồng thời duy trì chế độ ăn cân bằng, vận động phù hợp, ngủ đủ và chăm sóc da đúng cách.</p>
            <p class="blog-highlight"><strong>Nhà Thuốc An Đức 6 – Chăm sóc sức khỏe cùng bạn.</strong></p>
        `,

        sources: [
            "Myung SK, Park Y. Effects of Collagen Supplements on Skin Aging: A Systematic Review and Meta-Analysis of Randomized Controlled Trials. The American Journal of Medicine. 2025;138(9):1264–1277.",
            "Effects of Oral Collagen for Skin Anti-Aging: A Systematic Review and Meta-Analysis. Nutrients. 2023;15(9):2080.",
            "Simental-Mendía M, et al. Effect of collagen supplementation on knee osteoarthritis: an updated systematic review and meta-analysis of randomised controlled trials. Clinical and Experimental Rheumatology. 2025;43(1):126–134."
        ]
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

    const MAX_SHOW = 6;
    const newestFirst = blogs.slice().reverse();

    newestFirst.forEach(function (blog, index) {
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

        if (index >= MAX_SHOW) card.classList.add("blog-hidden");
        blogGrid.appendChild(card);

    });

        if (newestFirst.length > MAX_SHOW) {

        const moreBtn = document.createElement("button");

        moreBtn.type = "button";
        moreBtn.className = "blog-more-btn";
        moreBtn.textContent = "Xem thêm bài viết";

        moreBtn.addEventListener("click", function () {

            blogGrid.querySelectorAll(".blog-hidden").forEach(function (c) {
                c.classList.remove("blog-hidden");
            });

            moreBtn.remove();
        });

        blogGrid.insertAdjacentElement("afterend", moreBtn);
    }


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


       .blog-viewer-content .blog-table-wrap {

        overflow-x: auto;

        margin: 28px 0 32px;

        border: 1px solid rgba(128, 128, 128, 0.30);

        border-radius: 14px;

        -webkit-overflow-scrolling: touch;
    }


    .blog-viewer-content table {

        width: 100%;

        min-width: 560px;

        border-collapse: separate;

        border-spacing: 0;

        font-size: 15px;

        line-height: 1.65;

        text-align: left;
    }


    .blog-viewer-content th,
    .blog-viewer-content td {

        padding: 14px 18px;

        border-bottom: 1px solid rgba(128, 128, 128, 0.25);

        vertical-align: top;
    }


    .blog-viewer-content th + th,
    .blog-viewer-content td + td {

        border-left: 1px solid rgba(128, 128, 128, 0.25);
    }


    .blog-viewer-content th {

        background: rgba(26, 77, 46, 0.10);

        font-weight: 600;
    }


    .blog-viewer-content td:first-child {

        font-weight: 600;
    }


    .blog-viewer-content tbody tr:last-child td {

        border-bottom: none;
    }


    @media (max-width: 700px) {

        .blog-viewer-content th,
        .blog-viewer-content td {

            padding: 12px 14px;
        }

        .blog-viewer-content table {

            font-size: 14px;
        }
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