// 1. DỮ LIỆU CÂU HỎI (Bạn có thể thêm bao nhiêu tùy thích)

const hocPhan2 = [
    {
        "question": "Theo quan điểm chủ nghĩa Mác- Lênin về chiến tranh thì bản chất chiến tranh ngày nay:",
        "options": ["Có sự thay đổi phù hợp với sự phát triển của khoa học và kỹ thuật quân sự", "Có nhiều sự thay đổi về chất", "Không thay đổi"],
        "answer": "Không thay đổi"
    },
    {
        "question": "Theo quan điểm của chủ nghĩa Mác – Lênin, nguồn gốc nảy sinh chiến tranh là:",
        "options": ["Có 3 nguồn gốc (nguồn gốc kinh tế, nguồn gốc chính trị và nguồn gốc xã hội )", "Có 2 nguồn gốc (nguồn gốc kinh tế và nguồn gốc chính trị)", "Có 2 nguồn gốc (nguồn gốc kinh tế và nguồn gốc xã hội )"],
        "answer": "Có 2 nguồn gốc (nguồn gốc kinh tế và nguồn gốc xã hội )"
    },
    {
        "question": "Theo quan điểm của chủ nghĩa Mác- Lênin đặc trưng cơ bản của chiến tranh là:",
        "options": ["Là hành vi bạo lực", "Là sự huy động sức mạnh đến tột cùng, không hạn độ của các bên tham chiến", "Là bạo lực vũ trang có tổ chức"],
        "answer": "Là bạo lực vũ trang có tổ chức"
    },
    {
        "question": "Sức mạnh bảo vệ Tổ quốc theo tư tưởng Hồ Chí Minh:",
        "options": ["Là sức mạnh của cả dân tộc, cả nước kết hợp với sức mạnh của thời đại", "Là sức mạnh của cả dân tộc, của giai cấp công nhân dưới sự lãnh đạo của Đảng", "Là trách nhiệm và nghĩa vụ của cả dân tộc của giai cấp công nhân và nhân dân lao động"],
        "answer": "Là sức mạnh của cả dân tộc, cả nước kết hợp với sức mạnh của thời đại"
    },
    {
        "question": "Theo quan điểm chủ nghĩa Mác-Lênin, nguồn gốc trực tiếp dẫn đến chiến tranh là:",
        "options": ["Trong xã hội xuất hiện giai cấp và đối kháng giai cấp", "Trong xã hội xuất hiện chế độ tư hữu về tư liệu sản xuất và nhà nước", "Trong xã hội xuất hiện mâu thuẫn lợi ích"],
        "answer": "Trong xã hội xuất hiện giai cấp và đối kháng giai cấp"
    },
    {
        "question": "Phân tích tính chất chính trị xã hội của chiến tranh Hồ Chí Minh đã chia chiến tranh thành:",
        "options": ["Chiến tranh cách mạng và chiến tranh phản cách mạng", "Chiến tranh tiến bộ và chiến tranh phản tiến bộ", "Chiến tranh chính nghĩa và chiến tranh phi nghĩa"],
        "answer": "Chiến tranh chính nghĩa và chiến tranh phi nghĩa"
    },
    {
        "question": "“Bản chất giai cấp quyết định mục tiêu chiến đấu, nhiệm vụ chính trị và chức năng xã hội của quân đội” thể hiện:",
        "options": ["Bản chất giai cấp của quân đội về mặt chính trị", "Bản chất giai cấp của quân đội về mặt tư tưởng, tổ chức", "Bản chất giai cấp của quân đội về mặt tổ chức"],
        "answer": "Bản chất giai cấp của quân đội về mặt chính trị"
    },
    {
        "question": "Theo quan điểm của chủ nghĩa Mác - Lênin về bản chất giai cấp của quân đội phụ thuộc vào:",
        "options": ["Bản chất của các nhà nước đã tổ chức ra quân đội đó.", "Bản chất của các giai cấp và của nhà nước đã tổ chức ra quân đội đó.", "Bản chất của giai cấp công nông và của nhà nước đã tổ chức ra quân đội đó."],
        "answer": "Bản chất của các nhà nước đã tổ chức ra quân đội đó."
    },
    {
        "question": "Bảo vệ Tổ quốc XHCN theo quan điểm chủ nghĩa Mác- Lênin:",
        "options": ["Là sức mạnh của cả dân tộc, cả nước kết hợp với sức mạnh thời đại", "Là sức mạnh của cả dân tộc, của giai cấp công nhân", "Là trách nhiệm và nghĩa vụ của cả dân tộc của giai cấp công nhân và nhân dân lao động"],
        "answer": "Là trách nhiệm và nghĩa vụ của cả dân tộc của giai cấp công nhân và nhân dân lao động"
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh về chiến tranh, tiêu chí để nhận biết một cuộc chiến tranh chính nghĩa là:",
        "options": ["Là một cuộc chiến tranh phòng ngự", "Là một cuộc chiến tranh bảo vệ lợi ích chính đáng của dân tộc", "Là một cuộc chiến tranh bảo vệ lợi ích của giai cấp thống trị"],
        "answer": "Là một cuộc chiến tranh bảo vệ lợi ích chính đáng của dân tộc"
    },
    {
        "question": "Theo tư tưởng Hồ Chí Minh, Quân đội nhân dân Việt Nam có những chức năng:",
        "options": ["Chiến đấu và sẵn sàng chiến đấu.", "Chiến đấu, lao động sản xuất.", "Chiến đấu, công tác, lao động sản xuất."],
        "answer": "Chiến đấu, công tác, lao động sản xuất."
    },
    {
        "question": "Nguồn gốc nảy sinh chiến tranh theo quan điểm của chủ nghĩa Mác- Lênin:",
        "options": ["Do xuất hiện của cải dư thừa", "Do xuất hiện sự chiếm hữu tư nhân về tư liệu sản xuất, giai cấp và đối kháng giai cấp", "Do định mệnh của con người và xã hội loài người"],
        "answer": "Do xuất hiện sự chiếm hữu tư nhân về tư liệu sản xuất, giai cấp và đối kháng giai cấp"
    },
    {
        "question": "Theo quan điểm Chủ nghĩa Mác Lênin về bản chất giai cấp của quân đội:",
        "options": ["Bản chất giai cấp của quân đội phụ thuộc vào bản chất giai cấp của nhà nước sinh ra nó", "Là công cụ bạo lực vũ trang của toàn xã hội, bảo vệ lợi ích xã hội.", "Bản chất giai cấp của quân đội là bền vững, bất biến, không thay đổi"],
        "answer": "Bản chất giai cấp của quân đội phụ thuộc vào bản chất giai cấp của nhà nước sinh ra nó"
    },
    {
        "question": "Tư tưởng Hồ Chí Minh về sức mạnh bảo vệ Tổ quốc:",
        "options": ["Là sức mạnh của cả dân tộc, kết hợp với sức mạnh của nền quốc phòng toàn dân.", "Là sức mạnh tổng hợp của cả dân tộc, cả nước kết hợp với sức mạnh thời đại.", "Là sức mạnh của toàn dân, lấy lực lượng vũ trang làm nòng cốt."],
        "answer": "Là sức mạnh tổng hợp của cả dân tộc, cả nước kết hợp với sức mạnh thời đại."
    },
    {
        "question": "Tư tưởng Hồ Chí Minh xác định thái độ đối với chiến tranh là:",
        "options": ["Phản đối tất cả các cuộc chiến tranh.", "Phản đối các cuộc chiến tranh chống áp bức, nô dịch.", "Ủng hộ chiến tranh chính nghĩa, phản đối chiến tranh phi nghĩa."],
        "answer": "Ủng hộ chiến tranh chính nghĩa, phản đối chiến tranh phi nghĩa."
    },
    {
        "question": "Theo quan điểm chủ nghĩa Mác Lênin, bản chất chiến tranh là:",
        "options": ["“Là sự kế tục của chính trị bằng những biện pháp khác”(cụ thể là bằng bạo lực)", "Chiến tranh làm gián đoạn chính trị bằng biện pháp bạo lực", "Chiến tranh quyết định mục đích chính trị bằng biện pháp bạo lực"],
        "answer": "“Là sự kế tục của chính trị bằng những biện pháp khác”(cụ thể là bằng bạo lực)"
    },
    {
        "question": "Quan điểm đầu tiên của chủ nghĩa Mác - Lênin về bảo vệ Tổ quốc xã hội chủ nghĩa:",
        "options": ["Bảo vệ tổ quốc xã hội chủ nghĩa là nhiệm vụ thường xuyên liên tục.", "Bảo vệ tổ quốc xã hội chủ nghĩa là tất yếu khách quan.", "Bảo vệ tổ quốc xã hội chủ nghĩa là nhiệm vụ trọng yếu của toàn dân."],
        "answer": "Bảo vệ tổ quốc xã hội chủ nghĩa là tất yếu khách quan."
    },
    {
        "question": "Nguyên tắc quan trọng nhất về xây dựng quân đội kiểu mới của Lê nin là:",
        "options": ["Sự lãnh đạo của Đảng Cộng sản đối với quân đội.", "Tính kỷ luật cao là yếu tố quyết định sức mạnh quân đội.", "Quân đội chính quy, hiện đại, trung thành với giai cấp công nhân."],
        "answer": "Sự lãnh đạo của Đảng Cộng sản đối với quân đội."
    },
    {
        "question": "Theo quan điểm của Lênin, “bảo vệ Tổ quốc XHCN”:",
        "options": ["Là trách nhiệm và nghĩa vụ của toàn dân tộc, của giai cấp công nhân và nhân dân lao động", "Là trách nhiệm của lực lượng vũ trang (quân đội, công an)", "Là chiến tranh nhân dân thực hiện toàn dân đánh giặc"],
        "answer": "Là trách nhiệm và nghĩa vụ của toàn dân tộc, của giai cấp công nhân và nhân dân lao động"
    },
    {
        "question": "Lê nin khẳng định yếu tố giữ vai trò quyết định đến sức mạnh chiến đấu của quân đội:",
        "options": ["Quân số, tổ chức, cơ cấu biên chế.", "Chất lượng vũ khí, trang bị kỹ thuật.", "Chính trị tinh thần."],
        "answer": "Chính trị tinh thần."
    },
    {
        "question": "Nội dung xây dựng thế trận QPTD – ANND là:",
        "options": ["Phân vùng chiến lược về QP, AN kết hợp với xây dựng hậu phương chiến lược", "Phân vùng chiến lược cho lực lượng bộ đội chủ lực kết hợp xây dựng hậu phương vững mạnh", "Phân vùng chiến lược cho bộ đội chủ lực và bộ đội địa phương, kết hợp xây dựng hậu phương vững mạnh"],
        "answer": "Phân vùng chiến lược về QP, AN kết hợp với xây dựng hậu phương chiến lược"
    },
    {
        "question": "Xây dựng tiềm lực quân sự an ninh cần tập trung vào:",
        "options": ["Xây dựng lực lượng vũ trang vững mạnh toàn diện về mọi mặt", "Xây dựng lực lượng vũ trang nhân dân vững mạnh toàn diện về mọi mặt", "Xây dựng lực lượng quân đội, công an nhân dân vững mạnh toàn diện về mọi mặt"],
        "answer": "Xây dựng lực lượng vũ trang nhân dân vững mạnh toàn diện về mọi mặt"
    },
    {
        "question": "Tiềm lực khoa học, công nghệ của nền quốc phòng toàn dân, an ninh nhân dân:",
        "options": ["Là khả năng về khoa học và công nghệ của quốc gia trên tất cả các lĩnh vực đời sống xã hội", "Là khả năng về khoa học và công nghệ của quốc gia có thể khai thác, huy động để phục vụ cho QP-AN", "Là khả năng về khoa học và công nghệ của lực lượng vũ trang nhân dân Việt Nam"],
        "answer": "Là khả năng về khoa học và công nghệ của quốc gia có thể khai thác, huy động để phục vụ cho QP-AN"
    },
    {
        "question": "Tiềm lực quân sự an ninh là:",
        "options": ["Là khả năng về vật chất và tinh thần của xã hội có thể huy động tạo thành sức mạnh phục vụ cho nhiệm vụ quân sự, an ninh và cho chiến tranh", "Là sức mạnh của lực lượng vũ trang nhân dân được huy động để bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.", "Là sức mạnh của lực lượng vũ trang nhân dân, đặc biệt là sức mạnh của quân đội nhân dân"],
        "answer": "Là khả năng về vật chất và tinh thần của xã hội có thể huy động tạo thành sức mạnh phục vụ cho nhiệm vụ quân sự, an ninh và cho chiến tranh"
    },
    {
        "question": "Vai trò tiềm lực quân sự an ninh trong nền QPTD – ANND là:",
        "options": ["Tiềm lực quân sự an ninh là nhân tố cơ bản, biểu hiện tập trung, trực tiếp sức mạnh nền QPTD - ANND", "Tiềm lực quân sự an ninh là nhân tố cơ bản quyết định sức mạnh nền QPTD - ANND", "Tiềm lực quân sự an ninh là nhân tố quan trọng nhất tạo nên sức mạnh nền QPTD - ANND"],
        "answer": "Tiềm lực quân sự an ninh là nhân tố cơ bản, biểu hiện tập trung, trực tiếp sức mạnh nền QPTD - ANND"
    },
    {
        "question": "Xây dựng lực lượng QP – AN là xây dựng:",
        "options": ["Lực lượng thường trực và lực lượng dự bị động viên", "Bộ đội chủ lực, bộ đội địa phương, bộ đội biên phòng, bộ đội cảnh sát biển", "Lực lượng chính trị và lực lượng vũ trang nhân dân"],
        "answer": "Lực lượng chính trị và lực lượng vũ trang nhân dân"
    },
    {
        "question": "Thế trận quốc phòng, an ninh là:",
        "options": ["Là sự tổ chức, bố trí lực lượng vũ trang nhân dân theo yêu cầu của quốc phòng, an ninh", "Là sự tổ chức, bố trí lực lượng, tiềm lực mọi mặt của đất nước và của toàn dân theo yêu cầu của quốc phòng, an ninh", "Là sự tổ chức, bố trí lực lượng vũ trang theo yêu cầu của chiến tranh nhân dân BVTQ"],
        "answer": "Là sự tổ chức, bố trí lực lượng, tiềm lực mọi mặt của đất nước và của toàn dân theo yêu cầu của quốc phòng, an ninh"
    },
    {
        "question": "Tính toàn diện trong xây dựng nền quốc phòng toàn dân, an ninh nhân dân là :",
        "options": ["Xây dựng nền QP – AN trên cơ sở xây dựng mọi tiềm lực của quốc gia.", "Mọi người dân phải tham gia xây dựng lực lượng vũ trang.", "Tập trung xây dựng các tiềm lực: kinh tế, chính trị tinh thần, khoa học công nghệ, quân sự - an ninh."],
        "answer": "Xây dựng nền QP – AN trên cơ sở xây dựng mọi tiềm lực của quốc gia."
    },
    {
        "question": "Tiềm lực kinh tế của nền phòng toàn dân, an ninh nhân dân:",
        "options": ["Là khả năng về kinh tế của đất nước trên tất cả các lĩnh vực đời sống xã hội", "Là khả năng về kinh tế của đất nước có thể khai thác, huy động nhằm phục vụ cho quốc phòng, an ninh", "Là khả năng về kinh tế của đất nước có thể khai thác, huy động nhằm phục vụ cho đời sống dân sinh"],
        "answer": "Là khả năng về kinh tế của đất nước có thể khai thác, huy động nhằm phục vụ cho quốc phòng, an ninh"
    },
    {
        "question": "Nội dung xây dựng thế trận QPTD – ANND bao gồm:",
        "options": ["Phân vùng chiến lược về QP,AN kết hợp với xây dựng hậu phương chiến lược", "Xây dựng khu vực phòng thủ tỉnh (thành phố) tạo nền tảng của thế trận QPTD- ANND", "Tất cả các phương án trên"],
        "answer": "Tất cả các phương án trên"
    },
    {
        "question": "Tiềm lực kinh tế là gì?",
        "options": ["Là khả năng về kinh tế của đất nước có thể khai thác huy động nhằm phục vụ cho quốc phòng, an ninh", "Là toàn bộ khả năng về nhân lực, vật lực và tài lực của toàn xã hội", "Là khả năng huy động về kinh tế của các tổ chức trong nước, kể cả các tổ chức có vốn đầu tư nước ngoài"],
        "answer": "Là khả năng về kinh tế của đất nước có thể khai thác huy động nhằm phục vụ cho quốc phòng, an ninh"
    },
    {
        "question": "Tiềm lực chính trị, tinh thần là:",
        "options": ["Nhân tố cơ bản tạo nên sức mạnh của QP, AN.", "Khả năng về chính trị, tinh thần của xã hội có thể huy động tạo nên sức mạnh để thực hiện nhiệm vụ QP, AN.", "Nhân tố hàng đầu trong xây dựng tiềm lực QP, AN."],
        "answer": "Khả năng về chính trị, tinh thần của xã hội có thể huy động tạo nên sức mạnh để thực hiện nhiệm vụ QP, AN."
    },
    {
        "question": "Lực lượng của nền Quốc phòng toàn dân, an ninh nhân dân bao gồm:",
        "options": ["Lực lượng toàn dân, lực lượng vũ trang nhân dân.", "Lực lượng quân đội nhân dân và công an nhân dân.", "Lực lượng toàn dân và dân quân tự vệ."],
        "answer": "Lực lượng toàn dân, lực lượng vũ trang nhân dân."
    },
    {
        "question": "Xây dựng tiềm lực khoa học công nghệ của nền quốc phòng toàn dân, an ninh nhân dân nhằm:",
        "options": ["Tạo nên khả năng về vũ khí trang bị kỹ thuật để phòng thủ đất nước.", "Tạo nên khả năng về khoa học công nghệ của quốc gia để phục vụ quốc phòng, an ninh.", "Tạo nên khả năng để huy động đội ngũ cán bộ khoa học kỹ thuật phục vụ quốc phòng, an ninh."],
        "answer": "Tạo nên khả năng về khoa học công nghệ của quốc gia để phục vụ quốc phòng, an ninh."
    },
    {
        "question": "Thế trận quốc phòng toàn dân, an ninh nhân dân thực chất là:",
        "options": ["Sự tổ chức, bố trí lực lượng, tiềm lực mọi mặt của đất nước trên toàn bộ lãnh thổ.", "Sự bố trí con người và vũ khí trang bị phù hợp trên toàn bộ lãnh thổ.", "Sự bố trí thế trận sẵn sàng tác chiến trên một địa bàn chiến lược."],
        "answer": "Sự tổ chức, bố trí lực lượng, tiềm lực mọi mặt của đất nước trên toàn bộ lãnh thổ."
    },
    {
        "question": "Đặc trưng đầu tiên của nền quốc phòng toàn dân, an ninh nhân dân:",
        "options": ["Mang tính chất tự vệ do giai cấp công nhân tiến hành.", "Chỉ có mục đích duy nhất là tự vệ chính đáng.", "Được xây dựng hiện đại có sức mạnh tổng hợp."],
        "answer": "Chỉ có mục đích duy nhất là tự vệ chính đáng."
    },
    {
        "question": "Tiềm lực quốc phòng, an ninh tập trung ở các lĩnh vực:",
        "options": ["Chính trị, tinh thần; khoa học và công nghệ; kinh tế; quân sự, an ninh.", "Chính trị, tinh thần; đối ngoại, khoa học và công nghệ.", "Công nghiệp quốc phòng, khoa học quân sự."],
        "answer": "Chính trị, tinh thần; khoa học và công nghệ; kinh tế; quân sự, an ninh."
    },
    {
        "question": "Đảng ta khẳng định vị trí của nền quốc phòng toàn dân, an ninh nhân dân là:",
        "options": ["Chỉ coi trọng quốc phòng, an ninh khi đât nước có chiến tranh.", "Luôn luôn coi trọng quốc phòng, an ninh, coi đó là nhiệm vụ chiến lược gắn bó chặt chẽ.", "Luôn luôn coi trọng quốc phòng, an ninh, coi đó là nền tảng để xây dựng đất nước."],
        "answer": "Luôn luôn coi trọng quốc phòng, an ninh, coi đó là nhiệm vụ chiến lược gắn bó chặt chẽ."
    },
    {
        "question": "Đặc trưng mang tính truyền thống của nền quốc phòng toàn dân, an ninh nhân dân:",
        "options": ["Nền quốc phòng, an ninh do nhân dân xây dựng, mang tính chất nhân dân sâu sắc.", "Nền quốc phòng, an ninh vì dân, của dân và toàn thể nhân dân tiến hành.", "Nền quốc phòng, an ninh mang tính giai cấp, dân tộc sâu sắc."],
        "answer": "Nền quốc phòng, an ninh vì dân, của dân và toàn thể nhân dân tiến hành."
    },
    {
        "question": "Khái niệm chiến tranh nhân dân chỉ ra: Chiến tranh nhân dân là...?",
        "options": ["Là cuộc chiến tranh toàn dân, toàn diện do quân đội nhân dân Việt Nam làm nòng cốt...", "Là hình thức chiến tranh toàn dân - toàn diện, lấy lực lượng vũ trang nhân dân làm nòng cốt...", "Là hình thức chiến tranh huy động mọi tầng lớp nhân dân do lực lượng vũ trang làm nòng cốt..."],
        "answer": "Là hình thức chiến tranh toàn dân - toàn diện, lấy lực lượng vũ trang nhân dân làm nòng cốt..."
    },
    {
        "question": "Mục đích của chiến tranh nhân dân là?",
        "options": ["Giữ vững môi trường hòa bình, ổn định chính trị, an ninh quốc gia, trật tự an toàn xã hội.", "Giữ cho đất nước được hòa bình như hiện tại và mãi mãi.", "Giữ cho Tổ quốc luôn bình yên, phát triển, an ninh quốc gia và trật tự an toàn xã hội được bảo đảm"],
        "answer": "Giữ vững môi trường hòa bình, ổn định chính trị, an ninh quốc gia, trật tự an toàn xã hội."
    },
    {
        "question": "Đối tượng của chiến tranh nhân dân Việt Nam hiện nay là?",
        "options": ["Nhiều đối tượng trong đó tập trung chủ yếu vào những kẻ chống phá đất nước từ bên trong", "Chỉ có những thế lực muốn thôn tính chủ quyền, lãnh thổ của nước ta và bọn phản động ở trong nước", "Bất kể thế lực nào có âm mưu và hành động chống phá đất nước ta trong sự nghiệp xây dựng và bảo vệ Tổ quốc"],
        "answer": "Bất kể thế lực nào có âm mưu và hành động chống phá đất nước ta trong sự nghiệp xây dựng và bảo vệ Tổ quốc"
    },
    {
        "question": "Lực lượng trong chiến tranh nhân dân được tổ chức như thế nào?",
        "options": ["Được tổ chức chặt chẽ thành lực lượng quần chúng rộng rãi và lực lượng quân sự.", "Được tổ chức thành hai lực lượng là lực lượng nhân dân và lực lượng vũ trang.", "Được tổ chức cụ thể thành lực lượng đánh địch trên mặt trận quân sự và lực lượng đánh địch ở mọi nơi."],
        "answer": "Được tổ chức chặt chẽ thành lực lượng quần chúng rộng rãi và lực lượng quân sự."
    },
    {
        "question": "Một trong những điểm mạnh của kẻ thù khi tiến hành chiến tranh xâm lược nước ta?",
        "options": ["Khi tiến hành chiến tranh, chúng có thể lôi kéo các quốc gia khác tham cùng chiến dưới mọi hình thức.", "Buộc các nước đồng minh cùng tham chiến dưới mọi hình thức", "Vừa tiến hành chiến tranh vừa sử dụng các biện pháp ngoại giao để lôi kéo đồng minh để có lực lượng lớn."],
        "answer": "Khi tiến hành chiến tranh, chúng có thể lôi kéo các quốc gia khác tham cùng chiến dưới mọi hình thức."
    },
    {
        "question": "Việc tổ chức thế trận trong chiến tranh nhân dân cần được bố trí như thế nào?",
        "options": ["Thế trận Chiến tranh nhân dân Việt Nam bố trí đầy đủ, đồng đều, rộng khắp trên cả nước.", "Thế trận Chiến tranh nhân dân Việt Nam bố trí rộng khắp trên cả nước, nhưng có trọng tâm, trọng điểm", "Thế trận Chiến tranh nhân dân Việt Nam bố trí tập trung chủ yếu ở những khu vực trọng điểm"],
        "answer": "Thế trận Chiến tranh nhân dân Việt Nam bố trí rộng khắp trên cả nước, nhưng có trọng tâm, trọng điểm"
    },
    {
        "question": "Tính chất của chiến tranh nhân dân Việt Nam: Là cuộc chiến tranh...?",
        "options": ["Toàn dân, toàn diện lấy LLVTND làm nòng cốt, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.", "Đảng cộng sản Việt Nam lãnh đạo toàn thể nhân dân tiến hành chiến tranh toàn diện ở mọi nơi.", "Toàn dân, toàn diện, lấy LLVTND làm nòng cốt, dưới sự lãnh đạo của Nhà nước cộng hòa XHCN Việt Nam"],
        "answer": "Toàn dân, toàn diện lấy LLVTND làm nòng cốt, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam."
    },
    {
        "question": "Tiến hành chiến tranh nhân dân bảo vệ Tổ quốc, cần quán triệt mấy quan điểm chỉ đạo của Đảng?",
        "options": ["6 quan điểm chỉ đạo.", "5 quan điểm chỉ đạo.", "7 quan điểm chỉ đạo."],
        "answer": "6 quan điểm chỉ đạo."
    },
    {
        "question": "Theo bạn đâu là tiêu chí của một cuộc chiến tranh chính nghĩa?",
        "options": ["Cuộc chiến tranh để bảo vệ quyền và lợi ích chính đáng của một dân tộc", "Cuộc chiến tranh để bảo vệ quyền lợi của giai cấp", "Cuộc đấu tranh của tất cả nhân dân trên cả nước"],
        "answer": "Cuộc chiến tranh để bảo vệ quyền và lợi ích chính đáng của một dân tộc"
    },
    {
        "question": "Đâu là tính chất của chiến tranh nhân dân Việt Nam?",
        "options": ["Là cuộc chiến tranh phát huy sức mạnh của lịch sử dân tộc.", "Là cuộc chiến tranh toàn dân, toàn diện, lấy lực lượng vũ trang nhân dân làm nòng cốt.", "Là cuộc chiến tranh để bảo vệ biên giới, hải đảo, an ninh quốc gia"],
        "answer": "Là cuộc chiến tranh toàn dân, toàn diện, lấy lực lượng vũ trang nhân dân làm nòng cốt."
    },
    {
        "question": "Thế trận chiến tranh nhân dân được bố trí...?",
        "options": ["Rộng khắp trên cả nước nhưng có trọng tâm, trọng điểm.", "Trải đều trên cả nước và tập trung ở những mục tiêu quan trọng", "Tập trung ở những tỉnh, thành phố quan trọng và khu kinh tế lớn"],
        "answer": "Rộng khắp trên cả nước nhưng có trọng tâm, trọng điểm."
    },
    {
        "question": "Chiến tranh nhân dân ngày nay để bảo vệ Tổ quốc chúng ta cần tập trung đánh địch?",
        "options": ["Trên mặt trận ngoại giao và văn hóa.", "Trên mặt trận kinh tế và bảo vệ chủ quyền biển đảo", "Trên tất cả mọi mặt trận, lấy đấu tranh quân sự là chủ yếu."],
        "answer": "Trên tất cả mọi mặt trận, lấy đấu tranh quân sự là chủ yếu."
    },
    {
        "question": "Mục đích của chiến tranh nhân dân là để...?",
        "options": ["...bảo vệ nền văn hóa dân tộc", "...bảo vệ những nét văn hóa dân tộc", "...bảo vệ văn hóa dân tộc các vùng miền"],
        "answer": "...bảo vệ nền văn hóa dân tộc"
    },
    {
        "question": "Mục đích của chiến tranh nhân dân là để...?",
        "options": ["Giữ vững môi trường hòa bình, an ninh quốc gia, trật tự, an toàn xã hội", "Giữ vững môi trường hòa bình, ổn định chính trị, an ninh quốc gia, trật tự, an toàn xã hội", "Giữ vững môi trường hòa bình, an ninh quốc gia, trật tự, an toàn xã hội"],
        "answer": "Giữ vững môi trường hòa bình, ổn định chính trị, an ninh quốc gia, trật tự, an toàn xã hội"
    },
    {
        "question": "Tổ quốc Việt Nam XHCN của chúng ta được hiểu là bao gồm các thành tố nào?",
        "options": ["Lãnh thổ và toàn thể nhân dân.", "Nhân dân và chủ quyền biên giới cả đất liền và hải đảo.", "Lãnh thổ; nhân dân; thể chế chính trị (chế độ xã hội chủ nghĩa)"],
        "answer": "Lãnh thổ; nhân dân; thể chế chính trị (chế độ xã hội chủ nghĩa)"
    },
    {
        "question": "Quan điểm chuẩn bị mọi mặt trên cả nước cũng như từng khu vực để đủ sức đánh được lâu dài được hiểu?",
        "options": ["Chấp nhận nhường thế trận cho kẻ thù ngay trong giai đoạn đầu của chiến tranh", "Chủ động che giấu, ẩn nấp lực lượng phương tiện để không bị tổn thất về lâu dài", "Không đối đầu khi địch còn đang mạnh, tích cực chuẩn bị trên cả nước đủ sức đánh lâu dài"],
        "answer": "Không đối đầu khi địch còn đang mạnh, tích cực chuẩn bị trên cả nước đủ sức đánh lâu dài"
    },
    {
        "question": "Thực hiện toàn dân đánh giặc được hiểu là?",
        "options": ["Trang bị vũ khí cho mọi người dân tham gia đánh giặc.", "Tổ chức động viên toàn thể nhân dân tham gia đánh giặc.", "Huy động mọi người dân tham gia lực lượng vũ trang nhân dân"],
        "answer": "Tổ chức động viên toàn thể nhân dân tham gia đánh giặc."
    },
    {
        "question": "Trong việc huy động sức mạnh toàn dân đánh giặc, vai trò của LLVTND là gì?",
        "options": ["Là lực lượng chính đánh giặc và bảo vệ nhân dân.", "Là lực lượng nòng cốt để toàn dân đánh giặc.", "Là lực lượng chủ yếu, xung kích để đánh giặc."],
        "answer": "Là lực lượng nòng cốt để toàn dân đánh giặc."
    },
    {
        "question": "Tại sao phải chuẩn bị mọi mặt trên cả nước cũng như từng khu vực để đủ sức đánh được lâu dài?",
        "options": ["Vì chúng ta quán triệt quan điểm “trường kỳ kháng chiến”.", "Xuất phát từ âm mưu thủ đoạn của kẻ thù là “đánh nhanh thắng nhanh”", "Vì điều kiện, nguồn lực của chúng ta còn hạn chế"],
        "answer": "Xuất phát từ âm mưu thủ đoạn của kẻ thù là “đánh nhanh thắng nhanh”"
    },
    {
        "question": "Quan điểm thu hẹp không gian của chiến tranh được hiểu là?",
        "options": ["Ta chỉ đánh địch trên các mặt trận chính.", "Ta phải chuẩn bị mọi mặt chu đáo ngay từ ban đầu để địch đánh ở đâu thì bị sa lầy ở đó.", "Vì địch không quen với nghệ thuật mở rộng chiến tranh."],
        "answer": "Ta phải chuẩn bị mọi mặt chu đáo ngay từ ban đầu để địch đánh ở đâu thì bị sa lầy ở đó."
    },
    {
        "question": "Phương châm chỉ đạo của Đảng về bảo vệ tổ quốc trong tình hình mới?",
        "options": ["Kiên định về mục tiêu, nguyên tắc về sách lược; linh hoạt về chiến lược.", "Kiên định về mục tiêu, nguyên tắc chiến lược; linh hoạt, mềm dẻo về sách lược.", "Luôn luôn kiên định về mục tiêu, nguyên tắc cả trong chiến lược và sách lược."],
        "answer": "Kiên định về mục tiêu, nguyên tắc chiến lược; linh hoạt, mềm dẻo về sách lược."
    },
    {
        "question": "Mục đích của chiến tranh nhân dân Việt Nam bảo vệ Tổ quốc là:",
        "options": ["Bảo vệ độc lập-chủ quyền-lãnh thổ; Bảo vệ Đảng, Nhà nước và chế độ XHCN", "Bảo vệ lợi ích quốc gia dân tộc; Bảo vệ văn hóa; Giữ vững môi trường hòa bình", "Cả hai phương án trên"],
        "answer": "Cả hai phương án trên"
    },
    {
        "question": "Đối tượng tác chiến của chiến tranh nhân dân Việt Nam bảo vệ Tổ quốc là:",
        "options": ["Chủ nghĩa đế quốc và các lực lượng ly khai.", "Lực lượng khủng bố quốc tế và phản động trong nước.", "Bất kể thế lực nào có âm mưu và hành động chống phá mục tiêu của nước ta"],
        "answer": "Bất kể thế lực nào có âm mưu và hành động chống phá mục tiêu của nước ta"
    },
    {
        "question": "Âm mưu, thủ đoạn chủ yếu của kẻ thù khi xâm lược nước ta là:",
        "options": ["Thực hiện đánh nhanh, thắng nhanh", "Chỉ hỗ trợ cho lực lượng phản động trong nước", "Bất ngờ tấn công từ bên ngoài để lật đổ chế độ"],
        "answer": "Thực hiện đánh nhanh, thắng nhanh"
    },
    {
        "question": "Khi tiến hành chiến tranh xâm lược nước ta, địch có điểm mạnh là:",
        "options": ["Tiềm lực quân sự, kinh tế, khoa học kỹ thuật mạnh hơn ta rất nhiều lần", "Tiềm lực quân sự, kinh tế, chính trị, khoa học kỹ thuật mạnh hơn ta", "Tiềm lực quân sự, chính trị, khoa học kỹ thuật mạnh hơn ta"],
        "answer": "Tiềm lực quân sự, kinh tế, khoa học kỹ thuật mạnh hơn ta rất nhiều lần"
    },
    {
        "question": "Khi tiến hành chiến tranh xâm lược nước ta, địch có điểm yếu là:",
        "options": ["Đây là cuộc chiến tranh phi nghĩa, bị thế giới lên án", "Đây là cuộc chiến tranh phi nghĩa, bị nhân dân tiến bộ trên thế giới phản đối", "Đây là cuộc chiến tranh phi nghĩa, bị nhân dân tại các nước tham chiến phản đối"],
        "answer": "Đây là cuộc chiến tranh phi nghĩa, bị nhân dân tiến bộ trên thế giới phản đối"
    },
    {
        "question": "Tính chất chiến tranh nhân dân bảo vệ Tổ quốc là:",
        "options": ["Cuộc chiến tranh của giai cấp công nhân", "Cuộc chiến tranh chính nghĩa, tự vệ cách mạng nhằm bảo vệ Tổ quốc Việt Nam XHCN", "Cuộc chiến tranh tự vệ nhằm đánh thắng các thế lực xâm lược"],
        "answer": "Cuộc chiến tranh chính nghĩa, tự vệ cách mạng nhằm bảo vệ Tổ quốc Việt Nam XHCN"
    },
    {
        "question": "Tính chất hiện đại trong chiến tranh nhân dân bảo vệ Tổ quốc thể hiện ở:",
        "options": ["Hiện đại về vũ khí, trang bị, tri thức và nghệ thuật quân sự", "Sử dụng hoàn toàn vũ khí trang bị hiện đại", "Chỉ sử dụng vũ khí hiện đại từ nước ngoài"],
        "answer": "Hiện đại về vũ khí, trang bị, tri thức và nghệ thuật quân sự"
    },
    {
        "question": "Đâu là tính chất của chiến tranh nhân dân bảo vệ Tổ quốc?",
        "options": ["Toàn dân, toàn diện, lấy quân đội làm nòng cốt", "Toàn dân, toàn diện, lấy lực lượng vũ trang làm nòng cốt", "Toàn dân, toàn diện, lấy LLVTND làm nòng cốt, dưới sự lãnh đạo của Đảng"],
        "answer": "Toàn dân, toàn diện, lấy LLVTND làm nòng cốt, dưới sự lãnh đạo của Đảng"
    },
    {
        "question": "Quan điểm đánh giặc toàn diện được hiểu là:",
        "options": ["Đánh địch trên các mặt trận.", "Đánh giặc bằng tất cả các phương tiện, vật dụng, vũ khí hiện có", "Cả hai phương án trên"],
        "answer": "Cả hai phương án trên"
    },
    {
        "question": "Trong tiến hành chiến tranh toàn diện, mặt trận đấu tranh nào là chủ yếu:",
        "options": ["Mặt trận kinh tế", "Mặt trận quân sự", "Mặt trận ngoại giao"],
        "answer": "Mặt trận quân sự"
    },
    {
        "question": "Quan điểm của Đảng ta về chuẩn bị cho chiến tranh nhân dân bảo vệ Tổ Quốc?",
        "options": ["Chuẩn bị đánh địch lâu dài, giành thắng lợi càng sớm càng tốt", "Không dàn trận đối đầu khi địch còn mạnh", "Chuẩn bị mọi mặt để đánh lâu dài, thu hẹp không gian, rút ngắn thời gian để thắng sớm"],
        "answer": "Chuẩn bị mọi mặt để đánh lâu dài, thu hẹp không gian, rút ngắn thời gian để thắng sớm"
    },
    {
        "question": "Thế trận chiến tranh nhân dân thực chất là:",
        "options": ["Sự tổ chức, bố trí lực lượng phòng thủ đất nước", "Sự tổ chức bố trí lực lượng để tiến hành chiến tranh và hoạt động tác chiến", "Sự tổ chức, bố trí các lực lượng chiến đấu trên chiến trường"],
        "answer": "Sự tổ chức bố trí lực lượng để tiến hành chiến tranh và hoạt động tác chiến"
    },
    {
        "question": "Trong chiến tranh nhân dân bảo vệ Tổ quốc, thế trận chiến tranh được:",
        "options": ["Bố trí rộng khắp trên cả nước nhưng phải có trọng tâm, trọng điểm", "Bố trí rộng trên cả nước, tập trung cho khu vực chủ yếu", "Bố trí tập trung ở các vùng kinh tế trọng điểm"],
        "answer": "Bố trí rộng khắp trên cả nước nhưng phải có trọng tâm, trọng điểm"
    },
    {
        "question": "Lực lượng chiến tranh nhân dân là:",
        "options": ["Các quân khu, quân đoàn chủ lực", "Toàn dân đánh giặc trong đó nòng cốt là LLVTND gồm ba thứ quân", "Lực lượng lục quân, hải quân, phòng không không quân"],
        "answer": "Toàn dân đánh giặc trong đó nòng cốt là LLVTND gồm ba thứ quân"
    },
    {
        "question": "Tiến hành chiến tranh nhân dân bảo vệ Tổ quốc phải phối hợp chặt chẽ giữa:",
        "options": ["Chống xâm lược từ bên ngoài với chống khủng bố từ bên trong", "Chống tấn công từ bên ngoài với bạo loạn lật đổ từ bên trong", "Chống bạo loạn lật đổ với các hoạt động phá hoại khác"],
        "answer": "Chống tấn công từ bên ngoài với bạo loạn lật đổ từ bên trong"
    },
    {
        "question": "Nhiệm vụ của lực lượng vũ trang nhân dân Việt Nam là?",
        "options": ["Kiên quyết chiến đấu để bảo vệ nhân dân và Nhà nước Việt Nam XHCN", "Sẵn sàng chiến đấu và chiến đấu để bảo vệ độc lập chủ quyền, thống nhất và toàn vẹn lãnh thổ của Tổ quốc.", "Không ngừng chiến đấu và chiến thắng mọi kẻ thù để bảo vệ Tổ quốc."],
        "answer": "Sẵn sàng chiến đấu và chiến đấu để bảo vệ độc lập chủ quyền, thống nhất và toàn vẹn lãnh thổ của Tổ quốc."
    },
    {
        "question": "Nhiệm vụ của lực lượng vũ trang nhân dân Việt Nam hiện nay là?",
        "options": ["Cùng toàn dân xây dựng đất nước.", "Tập trung mọi nguồn lực cùng toàn dân xây dựng đất nước.", "Tận dụng mọi phương tiện hiện có cùng toàn dân xây dựng đất nước."],
        "answer": "Cùng toàn dân xây dựng đất nước."
    },
    {
        "question": "Phương hướng xây dựng lực lượng QĐND, CAND trong giai đoạn mới?",
        "options": ["Từng bước hiện đại đối với tất cả các lực lượng", "Từng bước hiện đại, ưu tiên một số quân binh chủng tiến thẳng lên hiện đại", "Tiến thẳng lên hiện đại"],
        "answer": "Từng bước hiện đại, ưu tiên một số quân binh chủng tiến thẳng lên hiện đại"
    },
    {
        "question": "Bộ đội chủ lực là lực lượng...?",
        "options": ["Có sức chiến đấu cao, được bố trí rộng khắp trên cả nước theo quy tắc nhất định", "Có sức chiến đấu cao, cơ động khắp chiến trường cả nước để đánh giặc trên khắp mọi vùng miền.", "Có sức chiến đấu cao, cơ động khắp chiến trường được bố trí phù hợp với thế trận chiến tranh nhân dân."],
        "answer": "Có sức chiến đấu cao, cơ động khắp chiến trường được bố trí phù hợp với thế trận chiến tranh nhân dân."
    },
    {
        "question": "Nội dung quan điểm tự lực, tự cường trong xây dựng lực lượng vũ trang là?",
        "options": ["Tích cực đẩy mạnh phát triển kinh tế và thực hành tiết kiệm.", "Tích cực tự nghiên cứu chế tạo vũ khí trang bị cho lực lượng vũ trang.", "Tích cực khai thác, tận dụng những loại vũ khí hiện có."],
        "answer": "Tích cực đẩy mạnh phát triển kinh tế và thực hành tiết kiệm."
    },
    {
        "question": "Xây dựng LLVT lấy chất lượng là chính, lấy xây dựng về chính trị làm cơ sở là:",
        "options": ["Thường xuyên làm tốt công tác chăm lo đơi sống để nâng cao trình độ sẵn sàng chiến đấu của LLVTND.", "Thường xuyên làm tốt công tác huấn luyện, diễn tập để nâng cao trình độ sẵn sàng chiến đấu của LLVTND.", "Thường xuyên làm tốt công tác chiến đấu để nâng cao trình độ sẵn sàng chiến đấu của LLVTND"],
        "answer": "Thường xuyên làm tốt công tác huấn luyện, diễn tập để nâng cao trình độ sẵn sàng chiến đấu của LLVTND."
    },
    {
        "question": "Phương hướng: Xây dựng lực lượng dự bị động viên...?",
        "options": ["Hùng hậu, được huấn luyện và quản lý tốt, bảo đảm khi cần thiết có thể động viên nhanh chóng theo kế hoạch", "Đủ số lượng và luôn trong trạng thái sẵn sàng tăng cường phục vụ cho các đơn vị thường trực.", "Tập trung huấn luyện tốt để có thể động viên nhanh chóng theo kế hoạch"],
        "answer": "Hùng hậu, được huấn luyện và quản lý tốt, bảo đảm khi cần thiết có thể động viên nhanh chóng theo kế hoạch"
    },
    {
        "question": "Khái niệm lực lượng vũ trang nhân dân Việt Nam cho thấy...?",
        "options": ["Lực lượng vũ trang nhân dân là các tổ chức vũ trang của nhân dân Việt Nam.", "Lực lượng vũ trang nhân dân là các tổ chức vũ trang và bán vũ trang của nhân dân Việt Nam.", "Là tất cả các lực lượng được vũ trang của nhân dân Việt Nam."],
        "answer": "Lực lượng vũ trang nhân dân là các tổ chức vũ trang và bán vũ trang của nhân dân Việt Nam."
    },
    {
        "question": "Nhiệm vụ của lực lượng vũ trang nhân dân Việt Nam là...?",
        "options": ["Tổ chức và hướng dẫn quần chúng nhân dân thực hiện thế trận chiến tranh nhân dân.", "Chủ yếu là hướng dẫn quần chúng nhân dân thực hiện thế trận chiến tranh nhân dân.", "Xây dựng thế trận chiến tranh và tổ chức cho nhân dân thực hiện theo."],
        "answer": "Tổ chức và hướng dẫn quần chúng nhân dân thực hiện thế trận chiến tranh nhân dân."
    },
    {
        "question": "Lực lượng vũ trang bao gồm những lực lượng cơ bản nào?",
        "options": ["Cảnh sát, quân đội", "Quân đội nhân dân Việt Nam", "Quân đội nhân dân Việt Nam và Công an nhân dân Việt Nam"],
        "answer": "Quân đội nhân dân Việt Nam và Công an nhân dân Việt Nam"
    },
    {
        "question": "Lực lượng thường trực trong Quân đội nhân dân Việt Nam bao gồm:...?",
        "options": ["Bộ đội chủ lực và các đơn vị quân đội đi làm kinh tế", "Bộ đội chủ lực, bộ đội địa phương, bộ đội biên phòng, bộ đội cảnh sát biển.", "Quân chủng Hải quân và quân chủng Phòng không – Không quân."],
        "answer": "Bộ đội chủ lực, bộ đội địa phương, bộ đội biên phòng, bộ đội cảnh sát biển."
    },
    {
        "question": "Dân quân, tự vệ được tổ chức như thế nào?",
        "options": ["Tổ chức ở các đơn vị hành chính cơ sở (xã, phường, thị trấn) và cơ quan, tổ chức của nhà nước", "Tổ chức ở bất cứ đâu không có quân đội, công an", "Tổ chức khi yêu cầu của việc bảo vệ Tổ quốc cần đến những lực lượng vũ trang khác."],
        "answer": "Tổ chức ở các đơn vị hành chính cơ sở (xã, phường, thị trấn) và cơ quan, tổ chức của nhà nước"
    },
    {
        "question": "Bộ chỉ huy quân sự các Tỉnh, Thành phố trực thuộc trung ương thuộc lực lượng nào sau đây?",
        "options": ["Bộ đội chủ lực.", "Bộ đội địa phương.", "Lực lượng vũ trang riêng biệt của các Tỉnh, Thành phố trực thuộc trung ương."],
        "answer": "Bộ đội địa phương."
    },
    {
        "question": "Đâu là đặc điểm có liên quan đến xây dựng lực lượng vũ trang nhân dân Việt Nam?",
        "options": ["Xây dựng LLVTND trong bối cảnh thế giới phức tạp, nước ta bình yên, không có sự đe dọa nào.", "Xây dựng LLVTND trong điều kiện chúng ta đã khá giả, có nhiều điều kiện để hiện đại hóa.", "Xây dựng LLVTND trong điều kiện quốc tế đã thay đổi, có nhiều diễn biến phức tạp."],
        "answer": "Xây dựng LLVTND trong điều kiện quốc tế đã thay đổi, có nhiều diễn biến phức tạp."
    },
    {
        "question": "Quan điểm nào sau đây mang tính chỉ đạo trong xây dựng lực lượng vũ trang nhân dân?",
        "options": ["Bảo đảm cho LLVTND luôn trong tư thế sẵn sàng chiến đấu và chiến đấu giành thắng lợi.", "Bảo đảm cho LLVTND luôn chiến đấu giành thắng lợi ngay cả trong thời bình.", "Bảo đảm cho LLVTND luôn trong tư thế sẵn sàng chiến đấu và chiến thắng."],
        "answer": "Bảo đảm cho LLVTND luôn trong tư thế sẵn sàng chiến đấu và chiến đấu giành thắng lợi."
    },
    {
        "question": "Quan điểm nguyên tắc trong xây dựng lực lượng vũ trang nhân dân thời kỳ mới là?",
        "options": ["Tiếp tục tăng cường sự lãnh đạo của Đảng cộng sản Việt Nam", "Giữ vững và tăng cường sự lãnh đạo của Đảng cộng sản Việt Nam đối với LLVTND.", "Không ngừng tăng cường sự lãnh đạo của Đảng cộng sản Việt Nam đối với LLVTND."],
        "answer": "Giữ vững và tăng cường sự lãnh đạo của Đảng cộng sản Việt Nam đối với LLVTND."
    },
    {
        "question": "Một trong những đặc điểm liên quan đến xây dựng lực lượng vũ trang nhân dân là?",
        "options": ["Đất nước ta bước sang thời kỳ đẩy mạnh CN hóa - hiện đại hóa và hội nhập kinh tế thế giới toàn diện hơn.", "Đất nước ta đã thực hiện xong việc đẩy mạnh CN hóa - hiện đại hóa.", "Đất nước ta đi qua thời kỳ đẩy mạnh CN hóa - hiện đại hóa."],
        "answer": "Đất nước ta bước sang thời kỳ đẩy mạnh CN hóa - hiện đại hóa và hội nhập kinh tế thế giới toàn diện hơn."
    },
    {
        "question": "Phương hướng xây dựng lực lượng vũ trang nhân dân trong giai đoạn mới là?",
        "options": ["Xây dựng quân đội, công an theo hướng cách mạng, chính quy, từng bước hiện đại.", "Xây dựng quân đội, công an theo hướng cách mạng, chính quy, tinh nhuệ, từng bước hiện đại.", "Xây dựng quân đội, cảnh sát theo hướng cách mạng, chính quy, tinh nhuệ, từng bước hiện đại."],
        "answer": "Xây dựng quân đội, công an theo hướng cách mạng, chính quy, tinh nhuệ, từng bước hiện đại."
    },
    {
        "question": "Một trong những biện pháp chủ yếu xây dựng lực lượng vũ trang nhân dân là?",
        "options": ["Từng bước giải quyết yêu cầu về vũ khí, trang bị kỹ thuật của LLVTND.", "Giải quyết ngay yêu cầu về hiện đại hóa vũ khí, trang bị kỹ thuật của LLVTND.", "Từng bước giải quyết yêu cầu về vũ khí, trang bị ngay vũ khí mới nhất cho lực lượng Hải quân."],
        "answer": "Từng bước giải quyết yêu cầu về vũ khí, trang bị kỹ thuật của LLVTND."
    },
    {
        "question": "LLVTND Việt Nam có nhiệm vụ là lực lượng xung kích, nòng cốt trong:",
        "options": ["Xây dựng nền quốc phòng toàn dân, an ninh nhân dân.", "Xây dựng và phát triển Quân đội nhân dân và Công an nhân dân", "Chống kẻ thù xâm lược và lực lượng phản động trong và ngoài nước."],
        "answer": "Xây dựng nền quốc phòng toàn dân, an ninh nhân dân."
    },
    {
        "question": "Truyền thống lịch sử đã chứng minh: Dựng nước đi đôi với giữ nước đã trở thành...?",
        "options": ["Quy luật tồn tại và phát triển của dân tộc ta.", "Quy luật tồn tại và đánh thắng mọi kẻ thù của nhân dân ta.", "Quy luật phát triển và hùng cường của dân tộc ta."],
        "answer": "Quy luật tồn tại và phát triển của dân tộc ta."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN trong khoa học, công nghệ và giáo dục là?",
        "options": ["Coi trọng giáo dục, đào tạo nhân tài cho nhiệm vụ quốc phòng, an ninh.", "Coi trọng giáo dục bồi dưỡng nhân lực, đào tạo nhân tài của đất nước.", "Coi trọng giáo dục bồi dưỡng và đào tạo nhân tài nhằm phát triển kinh tế."],
        "answer": "Coi trọng giáo dục bồi dưỡng nhân lực, đào tạo nhân tài của đất nước."
    },
    {
        "question": "Kết hợp phát triển kinh tế xã hội với tăng cường củng cố quốc phòng, an ninh hiện nay nhằm mục đích gì?",
        "options": ["Thực hiện thắng lợi hai nhiệm vụ chiến lược xây dựng và bảo vệ vững chắc Tổ quốc.", "Thực hiện tốt nhiệm vụ chiến lược xây dựng và phát triển kinh tế xã hội.", "Thực hiện tốt yêu cầu bảo vệ chủ quyền biển, đảo."],
        "answer": "Thực hiện thắng lợi hai nhiệm vụ chiến lược xây dựng và bảo vệ vững chắc Tổ quốc."
    },
    {
        "question": "Đặc điểm về QPAN ở các vùng kinh tế trọng điểm là?",
        "options": ["Nơi có tình hình an ninh chính trị rất phức tạp.", "Nơi thường xuyên có các hoạt động biểu tình về chính sách đất đai.", "Nơi có nhiều đối tượng, mục tiêu quan trọng phải bảo vệ"],
        "answer": "Nơi có nhiều đối tượng, mục tiêu quan trọng phải bảo vệ"
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN ở vùng núi, biên giới là?",
        "options": ["Tập trung xây dựng các xã trọng điểm về kinh tế và quốc phòng an ninh.", "Thực hiện tốt chương trình cắm mốc biên giới và đẩy mạnh giao thương.", "Hạn chế nhập khẩu, tăng cường xuất khẩu qua các đường biên nhỏ lẻ."],
        "answer": "Tập trung xây dựng các xã trọng điểm về kinh tế và quốc phòng an ninh."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN ở vùng biển, đảo là?",
        "options": ["Chú trọng đầu tư phát triển các đội tàu đánh cá cỡ lớn.", "Chú trọng phát triển các doanh nghiệp khai thác thủy sản quy mô lớn.", "Chú trọng đầu tư phát triển chương trình đánh bắt xa bờ."],
        "answer": "Chú trọng đầu tư phát triển chương trình đánh bắt xa bờ."
    },
    {
        "question": "Theo QĐ 2360/QĐ-Ttg, Vùng kinh tế trọng điểm Bắc Bộ bao gồm?",
        "options": ["Hà Nội, Hải Phòng và các tỉnh: Bắc Ninh, Hải Dương, Hưng Yên, Quảng Ninh.", "Hà Nội, Hải Phòng và các tỉnh: Bắc Ninh, Hải Dương, Hưng Yên, Quảng Ninh, Vĩnh Phúc.", "Hà Nội, Hải Phòng và các tỉnh: Bắc Ninh, Bắc Giang, Hải Dương, Quảng Ninh, Vĩnh Phúc."],
        "answer": "Hà Nội, Hải Phòng và các tỉnh: Bắc Ninh, Hải Dương, Hưng Yên, Quảng Ninh, Vĩnh Phúc."
    },
    {
        "question": "Theo QĐ 2360/QĐ-Ttg, Vùng kinh tế trọng điểm đồng bằng sông Cửu Long gồm?",
        "options": ["Tất cả các tỉnh, thành phố thuộc đồng bằng sông Cửu Long", "Thành phố Cần Thơ và các tỉnh: An Giang, Kiên Giang, Cà Mau.", "Thành phố Cần Thơ và các tỉnh: An Giang, Kiên Giang, Cà Mau, Bạc Liêu."],
        "answer": "Thành phố Cần Thơ và các tỉnh: An Giang, Kiên Giang, Cà Mau."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN trong lĩnh vực y tế là?",
        "options": ["Xây dựng kế hoạch động viên y tế dân sự cho quân sự khi có chiến tranh xảy ra", "Tận dụng quân y nhằm tăng thu nhập cho đội ngũ y bác sỹ.", "Huy động các bệnh viện quân y tham gia khám chữa bệnh nâng cao tay nghề."],
        "answer": "Xây dựng kế hoạch động viên y tế dân sự cho quân sự khi có chiến tranh xảy ra"
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN trong lĩnh vực y tế (địa bàn cụ thể) là?",
        "options": ["Xây dựng mô hình quân dân y kết hợp tại khu vực thành phố, thị xã.", "Xây dựng mô hình quân dân y kết hợp tại khu vực miền núi, biên giới, hải đảo.", "Xây dựng mô hình quân dân y kết hợp tại những khu vực nông thôn."],
        "answer": "Xây dựng mô hình quân dân y kết hợp tại khu vực miền núi, biên giới, hải đảo."
    },
    {
        "question": "Giải pháp chủ yếu để thực hiện kết hợp phát triển KTXH với củng cố QPAN hiện nay là?",
        "options": ["Xây dựng chiến lược tổng thể kết hợp KTXH với QPAN trong thời kỳ mới.", "Xây dựng chiến lược tổng thể kết hợp kinh tế với tăng cường quốc phòng.", "Xây dựng bản lĩnh cho thế hệ trẻ đặc biệt là học sinh, sinh viên."],
        "answer": "Xây dựng chiến lược tổng thể kết hợp KTXH với QPAN trong thời kỳ mới."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN trong lĩnh vực giao thông vận tải là?",
        "options": ["Xây dựng kế hoạch huy động các phương tiện giao thông vận tải cho thời chiến.", "Xây dựng kế hoạch động viên giao thông vận tải cho thời chiến.", "Xây dựng kế hoạch huy động một phần phương tiện giao thông cho thời chiến."],
        "answer": "Xây dựng kế hoạch động viên giao thông vận tải cho thời chiến."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN trong hoạt động đối ngoại là?",
        "options": ["Trong lĩnh vực đối ngoại phải chú trọng lựa chọn đối tác.", "Trong lĩnh vực kinh tế đối ngoại, phải kết hợp từ khâu lựa chọn đối tác.", "Tích cực kêu gọi đầu tư nước ngoài và ưu tiên các tập đoàn lớn."],
        "answer": "Trong lĩnh vực kinh tế đối ngoại, phải kết hợp từ khâu lựa chọn đối tác."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN ở vùng biển, đảo (về tình huống) là?",
        "options": ["Xây dựng phương án đối phó với các tình huống có thể xảy ra ở vùng biển, đảo.", "Tăng cường sức chiến đấu cho Hải quân sẵn sàng nổ súng bảo vệ biển đảo.", "Tạm thời chấp nhận chủ quyền không toàn vẹn để tập trung phát triển kinh tế."],
        "answer": "Xây dựng phương án đối phó với các tình huống có thể xảy ra ở vùng biển, đảo."
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN trong nông, lâm, ngư nghiệp là?",
        "options": ["Khai thác có hiệu quả tiềm năng đất đai và lao động dư thừa.", "Khai thác có hiệu quả tiềm năng đất đai, rừng biển, đảo và lực lượng lao động.", "Khai thác có hiệu quả tiềm năng nuôi trồng thủy sản và nguồn lao động."],
        "answer": "Khai thác có hiệu quả tiềm năng đất đai, rừng biển, đảo và lực lượng lao động."
    },
    {
        "question": "Tại sao phải kết hợp phát triển KTXH với tăng cường, củng cố QPAN?",
        "options": ["KTXH với QPAN có mối quan hệ biện chứng, tác động qua lại thúc đẩy nhau.", "KTXH tác động một chiều đến QPAN làm cho hoạt động này phát triển mạnh mẽ.", "QPAN xuất hiện để bảo vệ nền kinh tế phát triển bình thường ở mọi quốc gia."],
        "answer": "KTXH với QPAN có mối quan hệ biện chứng, tác động qua lại thúc đẩy nhau."
    },
    {
        "question": "Một trong những chủ trương kết hợp phát triển KTXH với QPAN thời chống Pháp?",
        "options": ["Xây dựng điểm các làng kháng chiến kết hợp với phát triển kinh tế.", "Xây dựng các khu vực chiến đấu ngay trong các khu vực sản xuất.", "Xây dựng làng kháng chiến, địch đến thì đánh, địch lui ta lại tăng gia sản xuất"],
        "answer": "Xây dựng làng kháng chiến, địch đến thì đánh, địch lui ta lại tăng gia sản xuất"
    },
    {
        "question": "Mục đích kết hợp phát triển KTXH với củng cố QPAN trong phát triển các vùng lãnh thổ?",
        "options": ["Theo ý đồ phòng thủ chiến lược bảo vệ Tổ quốc vững trên toàn cục và mạnh ở trọng điểm", "Theo kế hoạch phòng thủ chiến lược bảo vệ Nhà nước vững trên toàn cục.", "Theo ý đồ phòng thủ hiện nay để bảo vệ Tổ quốc trên toàn lãnh thổ."],
        "answer": "Theo ý đồ phòng thủ chiến lược bảo vệ Tổ quốc vững trên toàn cục và mạnh ở trọng điểm"
    },
    {
        "question": "Nội dung kết hợp phát triển KTXH với củng cố QPAN ở vùng kinh tế trọng điểm là?",
        "options": ["Xây dựng các thành phố, khu công nghiệp quy mô trung bình, bố trí trải đều.", "Xây dựng các thành phố, khu công nghiệp quy mô tập trung, trải đều.", "Quy hoạch xây dựng thành phố, khu công nghiệp quy mô trung bình, bố trí phân tán."],
        "answer": "Quy hoạch xây dựng thành phố, khu công nghiệp quy mô trung bình, bố trí phân tán."
    },
    {
        "question": "Đâu là nội dung kết hợp phát triển KTXH với củng cố QPAN và đối ngoại hiện nay?",
        "options": ["Kết hợp phát triển KTXH với tăng cường QPAN trong một số ngành mũi nhọn.", "Kết hợp phát triển KTXH với tăng cường QPAN trong các ngành, các lĩnh vực kinh tế chủ yếu.", "Kết hợp phát triển KTXH với tăng cường QPAN cần tập trung ở các tỉnh biên giới."],
        "answer": "Kết hợp phát triển KTXH với tăng cường QPAN trong các ngành, các lĩnh vực kinh tế chủ yếu."
    },
    {
        "question": "Nghệ thuật quân sự là:",
        "options": ["Là lý luận và thực tiễn để chỉ đạo và thực hành chiến tranh (đấu tranh vũ trang)", "Là tổng thể phương châm, chính sách và mưu lược để sẵn sàng tiến hành chiến tranh thắng lợi", "Là lý luận và thực tiễn để tổ chức và thực hành các chiến dịch quân sự"],
        "answer": "Là lý luận và thực tiễn để chỉ đạo và thực hành chiến tranh (đấu tranh vũ trang)"
    },
    {
        "question": "Cuộc chiến tranh đánh dấu kết thúc hơn một nghìn năm Bắc thuộc là:",
        "options": ["Cuộc kháng chiến chống quân Nam Hán của Ngô Quyền", "Cuộc khởi nghĩa Hai Bà Trưng", "Khởi nghĩa Bà Triệu"],
        "answer": "Cuộc kháng chiến chống quân Nam Hán của Ngô Quyền"
    },
    {
        "question": "Vì sao nước ta thường bị các thế lực ngoại xâm nhòm ngó, đe dọa, tiến công xâm lược:",
        "options": ["Việt Nam có rừng vàng, biển bạc.", "Việt Nam có vị trí chiến lược quan trọng ở khu vực Đông Nam Á và biển Đông.", "Việt Nam là một thị trường tiềm năng, có rất nhiều tài nguyên khoáng sản."],
        "answer": "Việt Nam có vị trí chiến lược quan trọng ở khu vực Đông Nam Á và biển Đông."
    },
    {
        "question": "Tư tưởng chỉ đạo tác chiến trong tiến hành chiến tranh của ông cha ta là:",
        "options": ["Tích cực chủ động phòng thủ.", "Tích cực chủ động tiến công.", "Kết hợp giữa tiến công và phòng ngự."],
        "answer": "Tích cực chủ động tiến công."
    },
    {
        "question": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít địch nhiều, lấy yếu chống mạnh là sản phẩm của:",
        "options": ["Lấy thế thắng lực.", "Lấy mưu thắng lực.", "Lấy ý chí thắng lực."],
        "answer": "Lấy thế thắng lực."
    },
    {
        "question": "Nội dung nghệ thuật đánh giặc của tổ tiên bao gồm:",
        "options": ["Sử dụng mưu kế để đánh giặc", "Kết hợp đấu tranh giữa các mặt trận quân sự, chính trị, ngoại giao và binh vận", "Cả hai phương án trên"],
        "answer": "Cả hai phương án trên"
    },
    {
        "question": "Cơ sở lý luận hình thành nghệ thuật quân sự Việt Nam từ khi có Đảng lãnh đạo:",
        "options": ["Quan điểm của chủ nghĩa Mác-Lênin về chiến tranh, quân đội và bảo vệ Tổ quốc", "Truyền thống và kinh nghiệm đánh giặc của tổ tiên", "Kinh nghiệm từ các cuộc chiến tranh trên thế giới"],
        "answer": "Quan điểm của chủ nghĩa Mác-Lênin về chiến tranh, quân đội và bảo vệ Tổ quốc"
    },
    {
        "question": "Vị trí của mặt trận quân sự trong nghệ thuật đánh giặc của tổ tiên được xác định:",
        "options": ["Là mặt trận có tính quyết định trực tiếp thắng lợi của chiến tranh", "Thắng lợi trên mặt trận quân sự sẽ tạo đà, tạo thế cho các mặt trận khác", "Cả hai phương án trên"],
        "answer": "Cả hai phương án trên"
    },
    {
        "question": "Trong nghệ thuật quân sự Việt Nam từ khi có Đảng, nghệ thuật nào là quan trọng nhất:",
        "options": ["Nghệ thuật chiến thuật.", "Nghệ thuật chiến dịch.", "Nghệ thuật chiến lược."],
        "answer": "Nghệ thuật chiến lược."
    },
    {
        "question": "Phương châm tiến hành chiến tranh được Đảng ta chỉ đạo là:",
        "options": ["Tự lực cánh sinh, đánh lâu dài, dựa vào sức mình là chính.", "Tự lực cánh sinh, đánh lâu dài, dựa vào sức mạnh thời đại.", "Tự lực cánh sinh và dựa vào các nước để đánh lâu dài."],
        "answer": "Tự lực cánh sinh, đánh lâu dài, dựa vào sức mình là chính."
    },
    {
        "question": "Một số loại hình chiến dịch trong nghệ thuật quân sự Việt Nam hiện đại là:",
        "options": ["Chiến dịch phục kích, tập kích, đổ bộ đường không tổng hợp.", "Chiến dịch tiến công, phản công, phòng ngự, phòng không, tiến công tổng hợp.", "Chiến dịch tiến công, tập kích đường không chiến lược."],
        "answer": "Chiến dịch tiến công, phản công, phòng ngự, phòng không, tiến công tổng hợp."
    },
    {
        "question": "Cuộc kháng chiến chống quân Tống thời Lý (1075-1077) điển hình cho nghệ thuật quân sự nào?",
        "options": ["Tránh chỗ mạnh đánh chỗ yếu", "“Thanh dã” (vườn không nhà trống)", "“Tiên phát chế nhân” (Chủ động tiến công trước để đẩy địch vào thế bị động)"],
        "answer": "“Tiên phát chế nhân” (Chủ động tiến công trước để đẩy địch vào thế bị động)"
    },
    {
        "question": "Một trong những cơ sở hình thành nghệ thuật quân sự Việt Nam hiện đại là:",
        "options": ["Từ quan điểm của chủ nghĩa Mác – Lênin về đấu tranh giai cấp.", "Tư tưởng quân sự Hồ Chí Minh.", "Từ quan điểm của chủ nghĩa Mác – Lênin về đấu tranh dân tộc."],
        "answer": "Tư tưởng quân sự Hồ Chí Minh."
    },
    {
        "question": "Nghệ thuật quân sự Việt Nam từ khi có Đảng gồm các bộ phận hợp thành là:",
        "options": ["Chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh về bảo vệ Tổ quốc", "Chiến lược quân sự, nghệ thuật chiến dịch và chiến thuật", "Chiến lược quân sự, nghệ thuật chiến dịch và đường lối của Đảng"],
        "answer": "Chiến lược quân sự, nghệ thuật chiến dịch và chiến thuật"
    },
    {
        "question": "Trong cuộc khởi nghĩa Lam Sơn, mưu kế nào được Nguyễn Trãi sử dụng nổi tiếng?",
        "options": ["Vườn không nhà trống (Thanh dã)", "Rút lui chiến lược để bảo toàn lực lượng", "“Mưu phạt tâm công” (Đánh vào lòng người)"],
        "answer": "“Mưu phạt tâm công” (Đánh vào lòng người)"
    },
    {
        "question": "Yếu tố nào tác động đến việc hình thành nghệ thuật đánh giặc của tổ tiên ta:",
        "options": ["Yếu tố địa lý", "Yếu tố chính trị, văn hóa xã hội.", "Cả hai phương án trên"],
        "answer": "Cả hai phương án trên"
    },
    {
        "question": "Vai trò của yếu tố địa lý trong nghệ thuật đánh giặc của tổ tiên ta là:",
        "options": ["Là yếu tố quan trọng tác động trực tiếp đến tư duy quân sự", "Là yếu tố rất quan trọng, tác động mạnh mẽ đến sự hình thành nghệ thuật đánh giặc.", "Cả hai phương án đều đúng"],
        "answer": "Là yếu tố rất quan trọng, tác động mạnh mẽ đến sự hình thành nghệ thuật đánh giặc."
    },
    {
        "question": "Bài học nghệ thuật quân sự nào cần vận dụng trong bảo vệ Tổ quốc hiện nay?",
        "options": ["Phát huy nghệ thuật quân sự “toàn dân đánh giặc”", "Tạo sức mạnh tổng hợp bằng lực, thế, thời và mưu kế", "Cả hai phương án trên"],
        "answer": "Cả hai phương án trên"
    },
    {
        "question": "Một trong những nghệ thuật đánh giặc tiêu biểu của ông cha ta là:",
        "options": ["Kết hợp đấu tranh quân sự, chính trị, ngoại giao, binh vận.", "Kết hợp đấu tranh quân sự, chính trị, ngoại giao, dân vận.", "Kết hợp đấu tranh quân sự, kinh tế, ngoại giao, binh vận."],
        "answer": "Kết hợp đấu tranh quân sự, chính trị, ngoại giao, binh vận."
    },
    {
        "question": "Thời nhà Trần vận dụng tư tưởng “tích cực, chủ động tiến công” như thế nào?",
        "options": ["Chủ động tấn công trước để phá thế giặc mạnh.", "Phòng ngự chiến lược tích cực sau đó phản công chiến lược.", "Chủ động rút lui chiến lược tránh thế mạnh của giặc sau đó phản công chiến lược."],
        "answer": "Chủ động rút lui chiến lược tránh thế mạnh của giặc sau đó phản công chiến lược."
    },
    {
        "question": "Nghệ thuật quân sự Việt Nam hiện đại hình thành dựa trên cơ sở nào?",
        "options": ["Từ truyền thống và nghệ thuật đánh giặc của Tổ tiên", "Từ học thuyết Mác-Lênin, tư tưởng Hồ Chí Minh về quân đội và bảo vệ Tổ quốc", "Từ kinh nghiệm của các nước trên thế giới vận dụng vào thực tiễn"],
        "answer": "Từ truyền thống và nghệ thuật đánh giặc của Tổ tiên"
    },
    {
        "question": "Sau cách mạng Tháng 8 năm 1945, Đảng ta xác định kẻ thù nguy hiểm trực tiếp nhất là:",
        "options": ["Quân đội Nhật, Anh, Pháp, Tưởng", "Quân đội Mỹ", "Thực dân Pháp"],
        "answer": "Thực dân Pháp"
    },
    {
        "question": "Tư tưởng chỉ đạo tác chiến xuyên suốt của ông cha ta là:",
        "options": ["Tích cực chủ động phòng thủ.", "Tích cực chủ động tiến công", "Kết hợp giữa tiến công và phòng ngự."],
        "answer": "Tích cực chủ động tiến công"
    },
    {
        "question": "Trong nghệ thuật kết hợp đấu tranh, mặt trận chính trị được xác định là:",
        "options": ["Mặt trận quan trọng nhất, chủ yếu nhất.", "Mặt trận quyết định thắng lợi của chiến tranh.", "Cơ sở để tạo ra sức mạnh về quân sự"],
        "answer": "Cơ sở để tạo ra sức mạnh về quân sự"
    },
    {
        "question": "Trong nghệ thuật chiến lược quân sự của Đảng, nội dung nào là quan trọng hàng đầu:",
        "options": ["Xác định đúng lực lượng và phương tiện tác chiến của kẻ thù.", "Xác định đúng đối tượng, đúng đối tác.", "Xác định đúng kẻ thù, đúng đối tượng tác chiến."],
        "answer": "Xác định đúng kẻ thù, đúng đối tượng tác chiến."
    },
    {
        "question": "Chủ quyền quốc gia là quyền... của một quốc gia trong phạm vi lãnh thổ?",
        "options": ["Tuyệt đối và toàn diện", "Làm chủ một cách độc lập, toàn vẹn và đầy đủ về mọi mặt lập pháp, hành pháp và tư pháp", "Độc lập thiết đặt các vấn đề về chủ quyền, pháp lý, chính trị"],
        "answer": "Làm chủ một cách độc lập, toàn vẹn và đầy đủ về mọi mặt lập pháp, hành pháp và tư pháp"
    },
    {
        "question": "Lãnh thổ quốc gia bao gồm có?",
        "options": ["Vùng đất, vùng biển, vùng trời", "Vùng đất, vùng nước, vùng trời và vùng lòng đất", "Vùng đất, vùng nước, vùng trời, vùng khí quyển và lòng đất"],
        "answer": "Vùng đất, vùng nước, vùng trời và vùng lòng đất"
    },
    {
        "question": "Vùng đất quốc gia bao gồm có?",
        "options": ["Đất liền, đảo và quần đảo", "Toàn bộ vùng đất bên trong đường biên giới quốc gia", "Lãnh thổ đất liền và bên trong lòng đất"],
        "answer": "Đất liền, đảo và quần đảo"
    },
    {
        "question": "Vùng nước quốc gia bao gồm có?",
        "options": ["Vùng biển và các sông, hồ, ao, suối, kênh, ngòi...", "Vùng nước thuộc vùng biển và vùng nước trong lãnh thổ", "Vùng nước nội địa, vùng nước biên giới, vùng nước nội thủy và vùng nước lãnh hải"],
        "answer": "Vùng nước nội địa, vùng nước biên giới, vùng nước nội thủy và vùng nước lãnh hải"
    },
    {
        "question": "Vùng biển Việt Nam được xác định có các vùng nào?",
        "options": ["Đường cơ sở, nội thủy, lãnh hải, đặc quyền kinh tế.", "Đường cơ sở, nội thủy, lãnh hải, đặc quyền kinh tế và thềm lục địa.", "Nội thủy, lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế và thềm lục địa."],
        "answer": "Nội thủy, lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế và thềm lục địa."
    },
    {
        "question": "Việt Nam đã tuyên bố chủ quyền với bao nhiêu quần đảo?",
        "options": ["1 quần đảo (quần đảo Trường Sa)", "3 quần đảo (Hoàng Sa, Trường Sa, quần đảo thuộc Vịnh Hạ Long)", "2 quần đảo (Hoàng Sa và Trường Sa)"],
        "answer": "2 quần đảo (Hoàng Sa và Trường Sa)"
    },
    {
        "question": "Theo Công ước Luật Biển 1982, mỗi quốc gia ven biển có những quyền gì?",
        "options": ["Quyền chủ quyền và quyền tài phán quốc gia trên biển", "Chủ quyền, quyền chủ quyền và quyền tài phán quốc gia", "Chủ quyền và quyền cho phép quốc gia khác hoạt động"],
        "answer": "Chủ quyền, quyền chủ quyền và quyền tài phán quốc gia"
    },
    {
        "question": "Các bộ phận cấu thành biên giới quốc gia bao gồm:",
        "options": ["Biên giới trên đất liền, trên vùng nước, trên không", "Biên giới trên đất liền, trên biển, trong không gian, lòng đất", "Biên giới trên đất liền, trên không, trên biển, trong lòng đất"],
        "answer": "Biên giới trên đất liền, trên không, trên biển, trong lòng đất"
    },
    {
        "question": "Biên giới quốc gia trên không được xác định là?",
        "options": ["Phần không gian trên đất liền và trên vùng biển thuộc chủ quyền quốc gia", "Mặt thẳng đứng từ biên giới trên đất liền và biên giới trên biển lên vùng trời", "Khoảng không gian bên trên biên giới đất liền của một quốc gia"],
        "answer": "Mặt thẳng đứng từ biên giới trên đất liền và biên giới trên biển lên vùng trời"
    },
    {
        "question": "Lực lượng tự vệ được tổ chức ở đâu?",
        "options": ["Ở xã, phường thị trấn.", "Ở cơ quan nhà nước, tổ chức chính trị - xã hội, đơn vị sự nghiệp, tổ chức kinh tế.", "Ở bất cứ nơi nào có quân đội đóng quân."],
        "answer": "Ở cơ quan nhà nước, tổ chức chính trị - xã hội, đơn vị sự nghiệp, tổ chức kinh tế."
    },
    {
        "question": "Phương châm xây dựng lực lượng dân quân tự vệ là:",
        "options": ["Vững mạnh, rộng khắp, coi trọng chất lượng là chính", "Vững mạnh, toàn diện, lấy chất lượng chính trị là chính.", "Vững mạnh, coi trọng cả số lượng và chất lượng."],
        "answer": "Vững mạnh, rộng khắp, coi trọng chất lượng là chính"
    },
    {
        "question": "Động viên công nghiệp quốc phòng được chuẩn bị từ khi nào?",
        "options": ["Khi bắt đầu chiến tranh", "Từ thời bình", "Trong quá trình chiến tranh"],
        "answer": "Từ thời bình"
    },
    {
        "question": "Động viên công nghiệp có áp dụng đối với các doanh nghiệp có vốn đầu tư nước ngoài không?",
        "options": ["Không", "Có thể động viên một phần", "Tùy tình hình cụ thể"],
        "answer": "Không"
    },
    {
        "question": "Nguyên tắc bảo vệ an ninh quốc gia là?",
        "options": [
            "Chủ động phòng ngừa, đấu tranh làm thất bại mọi âm mưu hoạt động xâm phạm ANQG",
            "Chủ động đấu tranh làm thất bại mọi âm mưu hoạt động xâm phạm ANQG",
            "Chủ động đấu tranh với các đối tượng xâm phạm ANQG"
        ],
        "answer": "Chủ động phòng ngừa, đấu tranh làm thất bại mọi âm mưu hoạt động xâm phạm ANQG"
    },
    {
        "question": "Nhiệm vụ bảo vệ ANQG là?",
        "options": [
            "Bảo vệ tuyệt đối an toàn cho các mục tiêu quan trọng về ANQG",
            "Bảo vệ ANQG trên tất cả các lĩnh vực trong đời sống xã hội",
            "Bảo vệ các bí mật của Nhà nước, các mục tiêu quan trọng về ANQG"
        ],
        "answer": "Bảo vệ ANQG trên tất cả các lĩnh vực trong đời sống xã hội"
    },
    {
        "question": "Một trong các nội dung của bảo vệ ANQG là:",
        "options": [
            "Đảm bảo thông tin an toàn, hiệu quả",
            "Đấu tranh với các đối tượng tội phạm công nghệ cao",
            "Bảo vệ an ninh thông tin"
        ],
        "answer": "Bảo vệ an ninh thông tin"
    },
    {
        "question": "Một trong các nội dung của giữ gìn trật tự ATXH là:",
        "options": [
            "Giữ gìn trật tự nơi công cộng",
            "Đấu tranh với các loại tội phạm nguy hiểm cho xã hội",
            "Đảm bảo trật tự đô thị"
        ],
        "answer": "Giữ gìn trật tự nơi công cộng"
    },
    {
        "question": "Khó khăn trong bảo vệ ANQG và giữ gìn trật tự ATXH hiện nay là:",
        "options": [
            "Sự gia tăng hoạt động của các tổ chức khủng bố quốc tế",
            "Các hành động xâm phạm độc lập chủ quyền, toàn vẹn lãnh thổ vẫn tiếp diễn",
            "Những khó khăn trong phát triển kinh tế xã hội trong giai đoạn hiện nay"
        ],
        "answer": "Các hành động xâm phạm độc lập chủ quyền, toàn vẹn lãnh thổ vẫn tiếp diễn"
    },
    {
        "question": "Đối tượng xâm phạm ANQG bao gồm:",
        "options": [
            "Gián điệp, phản động",
            "Các tổ chức phản động trong và ngoài nước",
            "Các thế lực thù địch trên thế giới"
        ],
        "answer": "Gián điệp, phản động"
    },
    {
        "question": "Nội dung quan điểm trong bảo vệ ANQG và giữ gìn trật tự ATXH là:",
        "options": [
            "Ưu tiên phát triển kinh tế XH xây dựng tiềm lực quốc gia trên mọi mặt",
            "Ưu tiên thực hiện các biện pháp tăng cường tiềm lực quân sự quốc gia",
            "Kết hợp chặt chẽ nhiệm vụ xây dựng và bảo vệ Tổ quốc"
        ],
        "answer": "Kết hợp chặt chẽ nhiệm vụ xây dựng và bảo vệ Tổ quốc"
    },
    {
        "question": "Một trong những nhiệm vụ bảo vệ an ninh quốc gia và giữ gìn ATXH:",
        "options": [
            "Bảo vệ bí mật Nhà nước và các mục tiêu quan trọng về an ninh quốc gia",
            "Bảo vệ bí mật các tổ chức chính trị - xã hội và các công trình QP-AN",
            "Bảo vệ bí mật các cấp chính quyền, sự nghiệp CNH-HĐH đất nước"
        ],
        "answer": "Bảo vệ bí mật Nhà nước và các mục tiêu quan trọng về an ninh quốc gia"
    },
    {
        "question": "Nội dung bảo vệ an ninh quốc gia bao gồm bảo vệ các lĩnh vực:",
        "options": [
            "Chính trị, nội bộ, an ninh kinh tế, Đảng, Nhà nước, nhân dân",
            "Kinh tế, văn hóa, tư tưởng, dân tộc, và sự nghiệp CNH-HĐH",
            "Chính trị xã hội, kinh tế, văn hóa tư tưởng, dân tộc, tôn giáo, biên giới, thông tin"
        ],
        "answer": "Chính trị xã hội, kinh tế, văn hóa tư tưởng, dân tộc, tôn giáo, biên giới, thông tin"
    },
    {
        "question": "Một trong những quan điểm của Đảng về bảo vệ ANQG và TT ATXH:",
        "options": [
            "Đảng lãnh đạo trực tiếp, tuyệt đối về mọi mặt bảo vệ an ninh quốc gia",
            "Kết hợp chặt chẽ nhiệm vụ xây dựng và nhiệm vụ bảo vệ Tổ quốc",
            "Phát huy quyền làm chủ của nhân dân trên lĩnh vực bảo vệ ANQG, trật tự xã hội"
        ],
        "answer": "Đảng lãnh đạo trực tiếp, tuyệt đối về mọi mặt bảo vệ an ninh quốc gia"
    }
];
const hocPhan1 = [
    {
        question: "Chủ thể của hoạt động phòng chống tội phạm là:",
        options: ["Chỉnh phủ và ủy ban nhân dân các cấp", "Công dân", "Quốc hội, hội đồng nhân dân các cấp", "Tất cả các phương án trên"],
        answer: "Tất cả các phương án trên"
    },
    {
        question: "Tác dụng của phong trào toàn dân bảo vệ an ninh tổ quốc:",
        options: ["Là hình thức đấu tranh với các loại tội phạm đảm bảo an ninh trật tự", "Là hình thức cơ bản để đảm bảo an ninh trật tự", "Là hình thức cơ bản để tập hợp và phát huy quyền làm chủ trong lĩnh vực an ninh trật tự", "Là hình thức huy động sức dân trong đảm bảo an ninh trật tự"],
        answer: "Là hình thức cơ bản để tập hợp và phát huy quyền làm chủ trong lĩnh vực an ninh trật tự"
    },
    {
        question: "Nhiệm vụ của bảo vệ an ninh quốc gia là:",
        options: ["Bảo đảm tuyệt đối an toàn cho các mục tiêu quan trọng về an ninh quốc gia", "Bảo vệ an ninh quốc gia tren tất cả các lĩnh vực của đời sống xã hội", "Bảo vệ các bí mật của nhà nước, các mục tiêu quan trọng về an ninh quốc gia", "Đấu tranh với các đối tượng xâm phạm an ninh quốc gia"],
        answer: "Bảo vệ các bí mật của nhà nước, các mục tiêu quan trọng về an ninh quốc gia"
    },
    {
        question: "Vùng lãnh hải theo công ước luật biển 1982 được tính từ đường cơ sở:",
        options: ["12 hải lí", "Không quá 12 hải lí", "24 hải lí", "Không quá 24 hải lí"],
        answer: "Không quá 12 hải lí"
    },
    {
        question: "Độ tuổi nam công dân tham gia dân quân tự vệ là:",
        options: ["Từ 18 đến hết 40 tuổi", "Từ 18 đến hết 45 tuổi", "Từ 18 dến hết 50 tuổi", "Từ 18 đến hết 55 tuổi"],
        answer: "Từ 18 đến hết 45 tuổi"
    },
    {
        question: "Nội dung nhiệm vụ của hoạt động phòng chống tội phạm là:",
        options: ["Xác định nguyên nhân của tình trạng tội phạm", "Nghiên cứu xác định rõ nguyên nhân điều kiện của tình trạng tội phạm", "Loại trừ các nguyên nhân xảy ra tình trạng tội phạm", "Đảm bảo trật tự an toàn xã hội"],
        answer: "Nghiên cứu xác định rõ nguyên nhân điều kiện của tình trạng tội phạm"
    },
    {
        question: "Nguyên tắc động viên công nghiệp quốc phòng là:",
        options: ["Động viên trên cơ sở nhu cầu thực tế của quân đội", "Động viên trên cơ sở điều kiện thực tế của đơn vị, địa phương", "Động viên trên cơ sở danh mục do chính phủ quy định", "Động viên trên cơ sở năng lực sản xuất, sửa chữa sẵn có của doanh nghiệp"],
        answer: "Động viên trên cơ sở năng lực sản xuất, sửa chữa sẵn có của doanh nghiệp"
    },
    {
        question: "Quan điểm chính sách tôn giáo của Đảng và Nhà nước ta hiện nay là:",
        options: ["Làm công tác tôn giáo là trách nhiệm của toàn Đảng, toàn dân ta", "Làm công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị do Đảng lãnh đạo", "Làm công tác tôn giáo là trách nhiệm chủ yếu của đội ngũ cán bộ chuyên trách", "Làm công tác tôn giáo là trách nhiệm của các địa phương có đồng bào tôn giáo"],
        answer: "Làm công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị do Đảng lãnh đạo"
    },
    {
        question: "Biện pháp thụ động trong phòng chống vũ khí công nghệ cao là:",
        options: ["Làm hạn chế các đặc trưng của mục tiêu", "Xoa bỏ các dấu hiệu nhận biết mục tiêu", "Gây nhiễu các phương tiện trinh sát của địch", "Dễ nhận dàng nhầm khi đối phương sử dụng mục tiêu giả"],
        answer: "Làm hạn chế các đặc trưng của mục tiêu"
    },
    {
        question: "Các loại tệ nạn xã hội phổ biến ở Việt Nam bao gồm:",
        options: ["Ma túy, mại dâm, cơ bạc", "Ma túy, mại dâm, cờ bạc, mê tín dị đoan", "Ma túy, mại dâm, cờ bạc, buôn bán phụ nữ và trẻ em", "Ma túy, mại dâm, cờ bạc, mê tin dị đoan, buôn bán phụ nữ và trẻ em"],
        answer: "Ma túy, mại dâm, cờ bạc, mê tín dị đoan"
    },
    {
        question: "Âm mưu của chiến lược “Diễn biến hòa bình” là:",
        options: ["Đa nguyên chính trị", "Xóa bỏ vai trò lãnh đạo của Đảng", "Áp đặt chế độ tư bản chủ nghĩa", "Tạo dựng các tổ chức phản động chống phá nước ta"],
        answer: "Xóa bỏ vai trò lãnh đạo của Đảng"
    },
    {
        question: "Nội dung quan điểm trong bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội là:",
        options: ["Ưu tiên phát triển kinh tế xã hội xây dựng tiềm lực quốc gia trên mọi mặt", "Ưu tiên thực hiện các biện pháp tang cường tiềm lực quân sự quốc gia", "Xây dựng đất nước mạnh về kinh tế, vững về quốc phòng", "Kết hợp chặt chẽ nhiệm vụ bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội"],
        answer: "Kết hợp chặt chẽ nhiệm vụ bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội"
    },
    {
        question: "Một trong những điểm yếu của vũ khí công nghệ cao là:",
        options: ["Không phù hợp với điều kiện tác chiến phức tạp", "Dựa hoàn toàn vào các phương tiện kĩ thuạt nên dễ bị đối phương đánh lừa", "Cồng kềnh, phức tạp, không linh hoạt", "Dễ bị tiêu diệt bằng các loại vũ khí thông thường"],
        answer: "Dựa hoàn toàn vào các phương tiện kĩ thuạt nên dễ bị đối phương đánh lừa"
    },
    {
        question: "Phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        options: ["Vận động toàn dân tham gia phòng chống tội phạm", "Vận động toàn dân tham gia các hoạt động phòng chống tội phạm", "Vận động toàn dân tham gia truy bắt tội phạm trên địa bàn", "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm"],
        answer: "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm"
    },
    {
        question: "Nguyên tắc trong đấu tranh chống bạo loạn lật đổ là:",
        options: ["Nhanh gọn, kiên quyết, linh hoạt, đúng đối tượng, sử dụng lực lượng, phương pháp phù hợp", "Sử dụng lực lượng vũ trang tại chỗ để chống bạo loạn", "Xử lí kiên quyết ngay từ dầu", "Sử dụng lực lượng vũ trang tại chỗ kết hợp với quần chúng nhân dân để chống bạo loạn"],
        answer: "Nhanh gọn, kiên quyết, linh hoạt, đúng đối tượng, sử dụng lực lượng, phương pháp phù hợp"
    },
    {
        question: "Quốc gia là thực thể được cấu thành bởi các yếu tố:",
        options: ["Dân cư, lãnh thổ, chính quyền", "Dân cư, lãnh thổ, chính quyền có chủ quyền", "Dân cư, các vũng lãnh thổ trong và ngoài biên giới quốc gia", "Dân cư, lãnh thổ, chính quyền, chế độ chính trị"],
        answer: "Dân cư, lãnh thổ, chính quyền có chủ quyền"
    },
    {
        question: "Biện pháp chủ động trong phòng chống vũ khí công nghệ cao là:",
        options: ["Tập trung tiêu diệt cá phương tiện trinh sát của địch", "Gây nhiễu các phương tiện trinh sát của địch", "Sử dụng các biện pháp ngụy trang che giấu mục tiêu", "Sơ tán mực tiêu vào các vị trí an toàn"],
        answer: "Tập trung tiêu diệt cá phương tiện trinh sát của địch"
    },
    {
        question: "Động viên công nghiệp quốc phòng là việc:",
        options: ["Bàn giao phương tiện sản xuất cho quân đội sử dụng", "Huy động đội ngũ cán bộ, công nhân kĩ thuật làm nhiệm vu cho quân đội", "Huy động một phần hoặc toàn bộ năng lực sửa chữa, sản xuất cho quân đội", "Tất cả các phương án trên"],
        answer: "Huy động một phần hoặc toàn bộ năng lực sửa chữa, sản xuất cho quân đội"
    },
    {
        question: "Đối tượng xâm phạm an ninh quốc gia là:",
        options: ["Gián điệp, phản động, các thế lực thù địch", "Gián điệp, phản động", "Các tổ chức phản động trong và ngoài nước", "Các thế lực thù địch trên thế giới"],
        answer: "Gián điệp, phản động, các thế lực thù địch"
    },
    {
        question: "Đâu là tính chất của tôn giáo:",
        options: ["Tính dân tộc của tôn giáo", "Tính cực đoan của tôn giáo", "Tính văn hóa của tôn giáo", "Tính chính trị của tôn giáo"],
        answer: "Tính chính trị của tôn giáo"
    },
    {
        question: "Các hình thức bạo loạn lật đổ là:",
        options: ["Bạo loạn chính trị", "Bạo loạn vũ trang", "Bạo loạn chính trị kết hợp với vũ trang", "Tất cả các hình thức trên"],
        answer: "Tất cả các hình thức trên"
    },
    {
        question: "Biện pháp chủ động trong phòng chống vũ khi công nghệ cao là:",
        options: ["Cơ động nhanh đảm bảo bí mật tuyệt đối", "Tổ chức đánh trả trên phạm vi toàn quốc", "Sử dụng các biện pháp ngụy trang che giấu mục tiêu", "Cơ động phòng tránh đánh trả kịp thời"],
        answer: "Cơ động phòng tránh đánh trả kịp thời"
    },
    {
        question: "Phương châm xây dựng lực lượng dân quân tự vệ là:",
        options: ["Vững mạnh, rộng khắp, có chất lượng cao", "Vững mạnh về mọi mặt", "Vững mạnh, rộng khắp, có trọng tâm trọng điểm", "Vững mạnh, rộng khắp coi trọng chất lượng là chính"],
        answer: "Vững mạnh, rộng khắp coi trọng chất lượng là chính"
    },
    {
        question: "Đâu là tính chất của tôn giáo:",
        options: ["Tính chất rộng rãi", "Tính chất cộng đồng", "Tính cực đoan", "Tính chất quần chúng"],
        answer: "Tính chất quần chúng"
    },
    {
        question: "Nhiệm vụ của hoạt động phòng chống tội phạm:",
        options: ["Xác định các nguyên nhân của tình trạng tội phạm", "Nghiên cứu, xác định rõ nguyên nhân, điều kiện của tình trạng tội phạm", "Loại trừ các nguyên nhân của tình trạng tội phạm", "Đảm bao an ninh trật tự xã hội"],
        answer: "Nghiên cứu, xác định rõ nguyên nhân, điều kiện của tình trạng tội phạm"
    },
    {
        question: "Mục tiêu phòng chống chiến lược DBHB – BLLĐ ở nước ta là:",
        options: ["Xây dựng thành công CNXH ở nước ta", "Xóa bỏ các tổ chức phản động chống phá nước ta", "Giữ vững hòa bình, ổn định khu vực và thế giới", "Giữ vững ổn định xã hội tạo môi trường hòa bình để xây dựng đất nước"],
        answer: "Giữ vững ổn định xã hội tạo môi trường hòa bình để xây dựng đất nước"
    },
    {
        question: "Một trong các nội dung của giữ gìn trật tự an toàn xã hội là:",
        options: ["Giữ gìn trật tự nơi công cộng", "Đảm bảo văn minh đô thị", "Đấu tranh với các loại tội phạm nguy hiểm cho xã hội", "Đảm bảo trật tự đô thị"],
        answer: "Giữ gìn trật tự nơi công cộng"
    },
    {
        question: "Biện pháp xây dựng lực lượng dân quân tự vệ trong giai đoạn hiện nay là:",
        options: ["Đảm bảo đầy đủ các chế độ cho lực lượng dân quân tự vệ", "Tăng cường huấn luyện chiến đấu cho dân quân tự vệ", "Phát huy sức manh tổng hợp trên địa bàn để xây dựng lực lượng dân quân tự vệ", "Đảm bảo đủ về số lượng và chất lượng dân quân tự vệ trên địa bàn"],
        answer: "Phát huy sức manh tổng hợp trên địa bàn để xây dựng lực lượng dân quân tự vệ"
    },
    {
        question: "Tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        options: ["Là hình thức đấu tranh với các loại tội phạm đảm bảo an ninh trật tự", "Là hình thức cơ bản để đảm bảo an ninh trật tự", "Là hình thức cơ bản để tạp hợp thu hút, phát huy quyền làm chủ trong lĩnh vực ANTT", "Là hình thức huy động sức dân trong đảm bảo an ninh trật tự"],
        answer: "Là hình thức cơ bản để tạp hợp thu hút, phát huy quyền làm chủ trong lĩnh vực ANTT"
    },
    {
        question: "Biện pháp xây dựng lực lượng dự bị động viên (DBĐV) là:",
        options: ["Thường xuyên bồi dưỡng cán bộ làm công tác DBĐV", "Thường xuyên củng cố kiến thức, bồi dưỡng cơ quan, cán bộ làm công tác xay dựng DBĐV", "Thường xuyên chăm lo xây dựng lực lượng DBĐV", "Thường xuyên kiện toàn lực lượng DBĐV"],
        answer: "Thường xuyên củng cố kiến thức, bồi dưỡng cơ quan, cán bộ làm công tác xay dựng DBĐV"
    },
    {
        question: "Vùng lãnh hải theo công ước luật biển 1982 được tính từ mức nước thủy triều thấp nhất là:",
        options: ["12 hải lí", "Không quá 12 hải lí", "24 hải lí", "Không quá 24 hải lí"],
        answer: "12 hải lí"
    },
    {
        question: "Âm mưu lợi dụng vấn đề dân tộc, tôn giáo của các thế lực thù địch là:",
        options: ["Phối hợp hoạt động các tổ chức phản động trong và ngoài nước", "Vu khống Việt Nam đàn áp dân tộc, tôn giáo", "Tạo dựng các tổ chức phản động trong các dân tộc thiểu số và các tôn giáo", "Xuyên tạc các chin sách dân tộc, tôn giáo của Đảng và Nhà nước ta"],
        answer: "Tạo dựng các tổ chức phản động trong các dân tộc thiểu số và các tôn giáo"
    },
    {
        question: "Các loại tệ nạn xã hội phổ biến ở Việt Nam hiện nay là:",
        options: ["Ma túy, mại dâm, cơ bạc", "Ma túy, mại dâm, cờ bạc, mê tín dị đoan", "Ma túy, mại dâm, cờ bạc, buôn bán phụ nữ và trẻ em", "Ma túy, mại dâm, cờ bạc, mê tin dị đoan, buôn bán phụ nữ và trẻ em"],
        answer: "Ma túy, mại dâm, cờ bạc, mê tín dị đoan"
    },
    {
        question: "Biện pháp thụ động trong phòng chóng vũ khi CNC là:",
        options: ["Tổ chức bố trí lực lượng tập trung quy mô lớn", "Tổ chức bố trí lực lượng tập trung quy mô vừa và nhỏ", "Tổ chức bố trí lực lượng phân tán có khả năng tác chiến độc lập", "Tổ cức bố trị lực lượng thành các cụm chiến đấu"],
        answer: "Tổ chức bố trí lực lượng phân tán có khả năng tác chiến độc lập"
    },
    {
        question: "Quốc gia là thực thể được cấu thành bởi các yếu tố:",
        options: ["Dân cư, lãnh thổ, chính quyền", "Dân cư, lãnh thổ, chính quyền có chủ quyền", "Dân cư, các vũng lãnh thổ trong và ngoài biên giới quốc gia", "Dân cư, lãnh thổ, chính quyền, chế độ chính trị"],
        answer: "Dân cư, lãnh thổ, chính quyền có chủ quyền"
    },
    {
        question: "Nội dung quan điểm bảo vệ an ninh quốc gia và giữ gìn trật tự ATXH là:",
        options: ["Ưu tiên phát triển kinh tế XH, xây dựng tiềm lực quốc gia trên mọi mặt", "Ưu tiên thực iện các biện pháp tang cường tiềm lực quốc phòng cho quốc gia", "Xây dựng đát nước mạnh về kinh tế, vững về quốc phòng – an ninh", "Kết hợp chặt chẽ giữa nhiemj vụ xây dựng và bảo vệ Tổ quốc"],
        answer: "Kết hợp chặt chẽ giữa nhiemj vụ xây dựng và bảo vệ Tổ quốc"
    },
    {
        question: "Thành phần của lực lượng dân quân tự vệ gồm:",
        options: ["Lực lượng nòng cốt và lực lượng rộng rãi", "Dân quân tự vệ bộ binh, quân binh chủng, tự vệ biển", "Lực lượng cơ động và lực lượng tại chỗ", "Lực lượng nòng cốt, lực lượng rộng rãi và lực lượng thường trực"],
        answer: "Lực lượng nòng cốt và lực lượng rộng rãi"
    },
    {
        question: "Nguyên tắc đấu tranh phòng chống bạo loạn là:",
        options: ["Nhanh gọn, kiên quyết, linh hoạt, đúng đối tượng, sử dụng lực lượng, phương pháp phù hợp", "Sử dụng lực lượng vũ trang tại chỗ để chống bạo loạn", "Xử lí kiên quyết ngay từ dầu", "Sử dụng lực lượng vũ trang tại chỗ kết hợp với quần chúng nhân dân để chống bạo loạn"],
        answer: "Nhanh gọn, kiên quyết, linh hoạt, đúng đối tượng, sử dụng lực lượng, phương pháp phù hợp"
    },
    {
        question: "Điểm yếu của vũ khí công nghệ cao là:",
        options: ["Không phù hợp với điều kiện tác chiến phức tạp", "Dựa hoàn toàn vào các phương tiện kĩ thuạt nên dễ bị đối phương đánh lừa", "Cồng kềnh, phức tạp, không linh hoạt", "Dễ bị tiêu diệt bằng các loại vũ khí thông thường"],
        answer: "Dựa hoàn toàn vào các phương tiện kĩ thuạt nên dễ bị đối phương đánh lừa"
    },
    {
        question: "Âm mưu của chiến lược “Diễn biến hòa bình” là:",
        options: ["Đa nguyên chính trị", "Xóa bỏ vai trò lãnh đạo của Đảng cộng sản", "Áp đặt chế độ tư bản chủ nghĩa", "Tạo dựng các tổ chức phản động chống phá Việt Nam"],
        answer: "Xóa bỏ vai trò lãnh đạo của Đảng cộng sản"
    },
    {
        question: "Điểm mạnh của vũ khi công nghệ cao là:",
        options: ["Có độ chính xác rất cao", "Thiết kế nhỏ gọn, linh hoạt", "Có độ chính xác cao, uy lực sát thương lứn, tầm hoạt động xa", "Có thể hoạt động trong mọi điều kiện địa hình, thời tiết"],
        answer: "Có độ chính xác cao, uy lực sát thương lứn, tầm hoạt động xa"
    },
    {
        question: "Dân quân tự vệ là:",
        options: ["Là lực lượng vũ trang địa phương", "Là lực lượng vũ trang quần chúng không thoát li sản xuất công tác", "Là lực lượng vũ trang bán chuyên nghiệp", "Là lực lượng vũ trang nhân dân"],
        answer: "Là lực lượng vũ trang quần chúng không thoát li sản xuất công tác"
    },
    {
        question: "Đặc điểm các dân tộc ở Việt Nam là:",
        options: ["Quy mô dân số có sự chênh lệch lớn", "Các dân tộc thiểu số có trình độ phát triển thấp, đời sống khó khan", "Các dân tộc có quy mô dân số và trình độ phát triển không đồng đều", "Có sự chênh lệch lớn về trình độ phát triển giữa các dân tộc"],
        answer: "Các dân tộc có quy mô dân số và trình độ phát triển không đồng đều"
    },
    {
        question: "Nhiệm vụ bảo vệ an ninh quốc gia là:",
        options: ["Bảo đảm tuyệt đối an toàn cho các mục tiêu quan trọng về an ninh quốc gia", "Bảo vệ an ninh quốc gia trên các lĩnh vực đời sống xã hội", "Bảo vệ các bí mật của nhà nước, các mục tiêu quan trọng về an ninh quốc gia", "Đấu tranh với các đối tượng xâm phạm an ninh quốc gia"],
        answer: "Bảo vệ các bí mật của nhà nước, các mục tiêu quan trọng về an ninh quốc gia"
    },
    {
        question: "Giải pháp phòng chống DBHB – BLLĐ trong giai đoạn hiện nay là:",
        options: ["Chăm lo xây dựng lực lượng vũ trang địa phương vững mạnh", "Chăm lo xây dựng lực lượng công an, quân đội địa phương vững mạnh về mọi mặt", "Xây dựng quân đội chính quy, tinh nhuệ, từng bước hiện đại", "Xây dựng quân đội hiện đại về mọi mặt"],
        answer: "Chăm lo xây dựng lực lượng vũ trang địa phương vững mạnh"
    },
    {
        question: "Quan điểm của Đảng và Nhà nước ta về xây dựng bảo vệ chủ quyền lãnh thổ quốc gia là:",
        options: ["Bảo vệ chủ quyền lãnh thổ quốc gia là nhiệm vụ quan trọng hàng đầu", "Bảo vệ chủ quyền lãnh thổ quốc gia là nhiệm vụ của toàn đảng, toàn dân ta", "Chủ quyền lãnh thổ quốc gia là thiêng liêng và bất khả xâm phạm của dân tộc", "Xay dựng đường biên giới hòa bình, ổn định lâu dài"],
        answer: "Chủ quyền lãnh thổ quốc gia là thiêng liêng và bất khả xâm phạm của dân tộc"
    },
    {
        question: "Các đối tượng xâm phạm an ninh quốc gia bao gồm:",
        options: ["Gián điệp, phản động, các thế lực thù địch", "Gián điệp, phản động", "Các tổ chức phản động trong và ngoài nước", "Các thế lực thù địch trên thế giới"],
        answer: "Gián điệp, phản động"
    },
    {
        question: "Lực lượng dự bị động viên gồm:",
        options: ["Quân dự bị", "Quân dự bị và phương tiện kĩ thuật được sắp xếp trong kế hoạch bổ sung cho quan đội", "Phương tiện kĩ thuật được sắp xếp trong kế hoạch bổ sung cho quân đội", "Tất cả phương tiện kĩ thuật ngoài quân đội"],
        answer: "Quân dự bị và phương tiện kĩ thuật được sắp xếp trong kế hoạch bổ sung cho quan đội"
    },
    {
        question: "Biện pháp thụ động trong phòng chống vũ khí công nghệ cao là:",
        options: ["Làm hạn chế các đặc trưng của mục tiêu", "Xoa bỏ các dấu hiệu nhận biết mục tiêu", "Tạo mục tiêu giả để đánh lừa", "Tạo các dấu hiệu giả để nghi binh"],
        answer: "Làm hạn chế các đặc trưng của mục tiêu"
    },
    {
        question: "Vai trò của quần chúng nhân dân trong bảo vệ an ninh tổ quốc là:",
        options: ["Có khả năng phát hiện, tố giác các đối tượng phạm tội", "Có khả năng phát hiện, quản lí, giáo dục, cải tạo để thu hẹp dần các đối tượng phạm tội", "Có khả năng phát hiện, đấu tranh với các loại tội phạm", "Có khả năng phát hiện, xử lí các đối tượng phạm tội"],
        answer: "Có khả năng phát hiện, quản lí, giáo dục, cải tạo để thu hẹp dần các đối tượng phạm tội"
    },
    {
        question: "Tội phạm là hành vi gây nguy hiểm cho xã hội do người có đủ năng lực trách nhiệm:",
        options: ["Thực hiện một cách cố ý", "Thực hiện một cách không cố ý", "Do vô ý thực hiện", "Tất cả các phương án trên"],
        answer: "Tất cả các phương án trên"
    },
    {
        question: "Quan điểm chỉ đạo phòng chống DBHB – BLLĐ trong giai đoạn hiện nay là:",
        options: ["Là nhiệm vụ cấp bách hàng đầu hiện nay", "Là nhiệm vụ quan trogj nhất trong sự nghiệp bảo vệ Tổ quốc", "Là nhiệm vụ cấp bách hàng đầu trong các nhiệm vụ về quốc phòng an ninh", "Là nhiệm vụ hàng đầu trong sự nghiệp xây dựng và bảo vệ Tổ quốc hiện nay"],
        answer: "Là nhiệm vụ cấp bách hàng đầu trong các nhiệm vụ về quốc phòng an ninh"
    },
    {
        question: "Mục đích của công tác phòng chống tệ nạn xã hội là:",
        options: ["Xóa bỏ các tệ nạn xã hội", "Xóa bỏ nguyên nhân làm phát sinh tệ nạn xã hội trên địa bàn", "Ngăn ngừa, chặn đứng không cho tệ nạn xã hội phát sinh, phát triển trên địa bàn", "Xóa bỏ tệ nạn xã họi, xây dựng đời sống văn hóa mới"],
        answer: "Ngăn ngừa, chặn đứng không cho tệ nạn xã hội phát sinh, phát triển trên địa bàn"
    },
    {
        question: "Biện pháp chủ động trong phòng chống vũ khí công nghệ cao là:",
        options: ["Tập trung tiêu diệt phương tiện trinh sát của địch", "Gây nhiễu các phương tiện trinh sát của địch", "Sử dụng các biện pháp ngụy trang che giấu mục tiêu", "Sơ tán mục tiêu vào khu vục an toàn"],
        answer: "Gây nhiễu các phương tiện trinh sát của địch"
    },
    {
        question: "Các vùng biển theo công ước luật biển 1982 được tính theo đường cơ sở là:",
        options: ["Nước nội thủy, lãnh hải, đặc quyền kinh tế", "Lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế", "Nước nội thủy, lãnh hải, đặc quyền kinh tế, thềm lục địa", "Lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế, thềm lục địa"],
        answer: "Lãnh hải, tiếp giáp lãnh hải, đặc quyền kinh tế"
    },
    {
        question: "Sắp xếp quân nhân dự bị vào các đơn vị dự bị động viên dựa trên căn cứ nào:",
        options: ["Theo trình độ văn hóa", "Theo trình độ quân sự, chuyên môn", "Theo trình độ chuyên môn nghiệp vụ", "Theo độ tuổi"],
        answer: "Theo trình độ quân sự, chuyên môn"
    },
    {
        question: "Nguyên tắc động viên công nghiệp quốc phòng là:",
        options: ["Động viên trên cơ sở nhu cầu của Bộ quốc phòng", "Động viên trên cơ sở điều kiện thực tế của địa phương", "Động viên trên cơ sở danh mục sản phẩm do chính phủ quy định", "Động viên trên cơ sở năng lực sản xuất, sửa chữa sẵn có của doanh nghiệp"],
        answer: "Động viên trên cơ sở năng lực sản xuất, sửa chữa sẵn có của doanh nghiệp"
    },
    {
        question: "Đặc điểm của phong trào toàn dân bảo vệ ANTQ là:",
        options: ["Chủ yếu liên quan đến các địa bàn phức tạp, tập trung đông người", "Đối tượng tham gia đa dạng, liên quan đến mọi người, mọi tầng lớp xã hội", "Là phong trào quần chúng rộng khắp", "Tùy thuộc vào đặc điểm của từng địa phương"],
        answer: "Đối tượng tham gia đa dạng, liên quan đến mọi người, mọi tầng lớp xã hội"
    },
    {
        question: "Một trong các giải pháp đấu tranh chống địch lợi dụng vấn đề dân tộc, tôn giáo là:",
        options: ["Ưu tiên tuyển dụng cán bộ là người dân tộc, tôn giáo", "Thực hiện tốt chính sách đào tạo, bồi dưỡng cán bộ người dân tộc, người có tôn giáo", "Tập trung đào tạo, bồi dưỡng cán bộ người dân tộc thiểu số", "Bồi dưỡng cán bộ các vùng dân tộc thiểu số, vùng đồng bào tôn giáo"],
        answer: "Thực hiện tốt chính sách đào tạo, bồi dưỡng cán bộ người dân tộc, người có tôn giáo"
    },
    {
        question: "Nội dung nhiệm vụ hoạt động phòng chống tội phạm:",
        options: ["Cách li các đối tượng phạm tội với xã hội", "Loại bỏ các nguyên nhân của tình trạng phạm tội", "Đảm bảo trật tự an toàn xã hội", "Tổ chức tiến hành các hoạt động phát hiện, điều tra xử lí tội phạm"],
        answer: "Tổ chức tiến hành các hoạt động phát hiện, điều tra xử lí tội phạm"
    },
    {
        question: "Nội dung xây dựng phong trào toàn dân bảo vệ an ninh tổ quốc là:",
        options: ["Vận động toàn dân tham gia phòng chống tội phạm trên địa bàn", "Vận động người dân giúp đỡ các cơ quan chức năng phòng chống tội phạm", "Vận động toàn dân tham gia truy bắt tội phạm trên địa bàn", "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm"],
        answer: "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm"
    },
    {
        question: "Nguyên tắc bảo vệ an ninh quốc gia là:",
        options: ["Kiên quyết đấu tranh làm thất bại mọi âm mưu hoạt động xâm phạm ANQG", "Chủ động phòng ngừa, đấu tranh làm thất bại các âm mưu, hoạt động xâm phạm ANQG", "Chủ động đấu tranh làm thất bại các âm mưu hoạt động xâm phạm ANQG", "Chủ động đấu tranh với các đối tượng xâm phạm ANQG"],
        answer: "Chủ động phòng ngừa, đấu tranh làm thất bại các âm mưu, hoạt động xâm phạm ANQG"
    },
    {
        question: "Quan điểm chính sách về dân tộc của Đảng và Nhà nước ta hiện nay là:",
        options: ["Xóa bỏ sự cách biệt về trình độ phát triển kinh tế xã hội giữa các dân tộc", "Khắc phục sự cách biệt về trình độ phát triển kinh tế xã hội giữa các dân tộc", "Tập trung nâng cao đời sống cho đồng bào dân tộc thiểu số", "Ưu tiên đầu tư cho vùng đồng bào dân tộc thiểu số"],
        answer: "Khắc phục sự cách biệt về trình độ phát triển kinh tế xã hội giữa các dân tộc"
    },
    {
        question: "Nội dung xây dựng bảo vệ chủ quyền lãnh thổ quốc gia:",
        options: ["Bảo vệ các vùng biển của quốc gia", "Đấu tranh với các âm mưu xâm phạm chủ quyền lãnh thổ quốc gia", "Bảo vệ sự toàn vẹn lãnh thổ quốc gia", "Xác lập và bảo vệ quyền lập pháp, hành pháp và tư pháp của Việt Nam trên mọi mặt"],
        answer: "Xác lập và bảo vệ quyền lập pháp, hành pháp và tư pháp của Việt Nam trên mọi mặt"
    },
    {
        question: "Phương pháp xây dựng phong trào toàn dân bảo vệ an ninh tổ quốc là:",
        options: ["Tuyên truyền hướng dẫn quần chúng thực hiện nhiệm vụ bảo vệ ANTQ", "Tuyên truyền, giáo dục chính sách pháp luật", "Tuyên truyền giáo dục chủ trương chính sách của Đảng và Nhà nước", "Tuyên truyền quần chúng nhân dân chấp hành nghiêm pháp luật"],
        answer: "Tuyên truyền hướng dẫn quần chúng thực hiện nhiệm vụ bảo vệ ANTQ"
    },
    {
        question: "Một trong các nội dung của bảo vệ an ninh quốc gia là:",
        options: ["Bảo vệ an toàn thông tin", "Đảm bảo thông tin an toàn, hiệu quả", "Đấu tranh với các loại tội phạm công nghệ cao", "Bảo vệ an ninh thông tin"],
        answer: "Bảo vệ an ninh thông tin"
    },
    {
        question: "Một trong các nhiệm vụ của dân quân tự vệ là:",
        options: ["Học tập chính trị, pháp luật, huấn luyện quân sự và diễn tập", "Phối hợp với nhân dân trên địa bàn tham gia xây dựng nền quốc phòng toàn dân", "Thực hiện nhiệm vụ học tập chính trị theo quy định của pháp luật", "Giữ gìn an ninh xã hội"],
        answer: "Học tập chính trị, pháp luật, huấn luyện quân sự và diễn tập"
    },
    {
        question: "Quan điểm chính sách tôn giáo của Đảng và Nhà nước ta hiện nay là:",
        options: ["Làm công tác tôn giáo là trách nhiệm của toàn Đảng, toàn dân ta", "Làm công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị do Đảng lãnh đạo", "Làm công tác tôn giáo là trách nhiệm chủ yếu của đội ngũ cán bộ chuyên trách", "Làm công tác tôn giáo là trách nhiệm của các địa phương có đồng bào tôn giáo"],
        answer: "Làm công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị do Đảng lãnh đạo"
    },
    {
        question: "Vũ khí trang bị của dân quân tự vệ:",
        options: ["Do Bộ quốc phòng cấp, địa phương tự chế tạo hoặc thu được của địch", "Do các cơ quan Bộ quốc phòng đảm bảo", "Do các địa phương tự đảm bảo", "Do địa phương tự chế tạo"],
        answer: "Do Bộ quốc phòng cấp, địa phương tự chế tạo hoặc thu được của địch"
    },
    {
        question: "Vai trò của quần chúng nhân dân trong bảo vệ an ninh tổ quốc là:",
        options: ["Có khả năng phát hiện, tố giác các đối tượng phạm tội", "Có khả năng phát hiện, quản lí, giáo dục, cải tạo để thu hẹp dần các đối tượng phạm tội", "Có khả năng phát hiện, đấu tranh với các loại tội phạm", "Có khả năng phát hiện, xử lí các đối tượng phạm tội"],
        answer: "Có khả năng phát hiện, quản lí, giáo dục, cải tạo để thu hẹp dần các đối tượng phạm tội"
    },
    {
        question: "Mục tiêu phòng chống “Diễn biến hòa bình – Bạo loạn lật đổ” ở nước ta là:",
        options: ["Xây dựng thành công CNXH ở Việt Nam", "Xóa bỏ các tổ chức phản động chống phá nước ta", "Giữ vững ổn định xã hội, tạo môi trường hòa bình xây dựng đất nước", "Ngăn chặn các hoạt động chống phá cách mạng Việt Nam"],
        answer: "Giữ vững ổn định xã hội, tạo môi trường hòa bình xây dựng đất nước"
    },
    {
        question: "Biên giới quốc gia gồm mấy bộ phận (mấy loại):",
        options: ["02 bộ phận", "03 bộ phận", "04 bộ phận", "05 bộ phận"],
        answer: "04 bộ phận"
    },
    {
        question: "Biện pháp thụ động trong phòng chống vũ khí công nghệ cao là:",
        options: ["Tổ chức bố trí lực lượng tập trung với quy mô lớn", "Tổ chức bố trí lực lượng chủ yếu với quy mô vừa và nhỏ", "Tổ chức bố trí lực lượng phân tán có khả năng tác chiến độc lập", "Tổ chức bố trí lực lượng thành các cụm tác chiến"],
        answer: "Tổ chức bố trí lực lượng phân tán có khả năng tác chiến độc lập"
    },
    {
        question: "Những khó khăn trong công tác bảo vệ an ninh quốc gia là:",
        options: ["Những bất ổn trong khu vực và trên thế giới", "Sự gia tăng hoạt động của các tổ chức khủng bố quốc tế", "Các hành động xâm phạm độc lập chủ quyền, toàn vẹn lãnh thổ vẫn tiếp diễn", "Những khó khăn trong phát triển kinh tế, xã hội trong giai đoạn hiện nay"],
        answer: "Các hành động xâm phạm độc lập chủ quyền, toàn vẹn lãnh thổ vẫn tiếp diễn"
    },
    {
        question: "Tổ chức biên chế của lực lượng dân quân tự vệ:",
        options: ["Tổ, tiểu đội (khẩu đội), trung đội, đại đội (hải đội)", "Tiểu đội (khẩu đội), trung đội, đại đội (hải đội)", "Tổ, tiểu đội (khẩu đội), trung đội, đại đội, (hải đội), tiểu đoàn (hải đoàn)", "Tổ, tiểu đội (khẩu đội), trung đội, đại đội, (hải đội), tiểu đoàn (hải đoàn), trung đoàn"],
        answer: "Tổ, tiểu đội (khẩu đội), trung đội, đại đội, (hải đội), tiểu đoàn (hải đoàn)"
    },
    {
        question: "Các hình thức bạo loạn lật đổ là:",
        options: ["Bạo loạn chính trị", "Bạo loạn vũ trang", "Bạo loạn chính trị kết hợp với vũ trang", "Tất cả các hình thức trên"],
        answer: "Tất cả các hình thức trên"
    },
    {
        question: "Một trong những điểm yếu của vũ khí công nghệ cao là:",
        options: ["Giá thành cao, chi phí lớn khi sử dụng VKCNC", "Mất nhiều thời gian chuẩn bị, không có yếu tố bất ngờ", "Cồng kềnh, khó vận chuyển", "Dễ bị phá hủy bởi vũ khí thô sơ"],
        answer: "Giá thành cao, chi phí lớn khi sử dụng VKCNC"
    }
];
// 1. DỮ LIỆU (Đảm bảo hocPhan1 đã chứa toàn bộ câu hỏi ở trên đoạn này)
// const hocPhan1 = [...]; 

let selectedQuestions = []; // 20 câu lấy ra từ hocPhan1 để thi
let currentIndex = 0;
let score = 0;
let timeLeft = 20 * 60; 
let timerInterval;

// Lấy các phần tử giao diện
const quizCard = document.getElementById('quiz-card');
const resultCard = document.getElementById('result-card');
const startScreen = document.getElementById('start-screen');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');
const timerDisplay = document.getElementById('timer-count');

// 2. HÀM TRỘN MẢNG
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 3. KHỞI TẠO GAME (Dùng chung hocPhan1 cho mọi trường hợp)
function startQuiz(phan) {
    // 1. Reset các thông số cơ bản
    currentIndex = 0;
    score = 0;
    timeLeft = 20 * 60;

    // 2. LOGIC CHỌN KHO CÂU HỎI
    if (phan === 1) {
        if (typeof hocPhan1 === 'undefined' || hocPhan1.length === 0) {
            alert("Lỗi: Chưa có dữ liệu cho Học phần 1!");
            return;
        }
        currentPool = [...hocPhan1];
    } 
    else if (phan === 2) {
        if (typeof hocPhan2 === 'undefined' || hocPhan2.length === 0) {
            alert("Lỗi: Chưa có dữ liệu cho Học phần 2!");
            return;
        }
        currentPool = [...hocPhan2];
    }

    // 3. Trộn câu hỏi
    shuffleArray(currentPool);
    selectedQuestions = currentPool.slice(0, 20);

    // 4. Hiển thị giao diện làm bài & ẨN DONATE
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('timer-container').classList.remove('hidden');
    document.getElementById('quiz-card').classList.remove('hidden');

    // --- THÊM 3 DÒNG NÀY ĐỂ ẨN DONATE ---
    const donateArea = document.querySelector('.donate-container');
    if (donateArea) {
        donateArea.style.display = 'none';
    }
    // ------------------------------------

    // 5. Chạy bộ đếm và hiện câu hỏi
    startTimer();
    renderQuestion();
}

// 4. HIỂN THỊ CÂU HỎI
function renderQuestion() {
    const q = selectedQuestions[currentIndex];
    const total = selectedQuestions.length;
    
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('current-number').innerText = currentIndex + 1;
    
    // Cập nhật thanh tiến trình
    progressFill.style.width = `${(currentIndex / total) * 100}%`;
    
    optionsContainer.innerHTML = '';
    
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        btn.onclick = () => handleAnswer(btn, option, q.answer);
        optionsContainer.appendChild(btn);
    });
}

// 5. XỬ LÝ CHỌN ĐÁP ÁN
function handleAnswer(selectedBtn, selectedChoice, correctAnswer) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.style.pointerEvents = 'none'); 

    if (selectedChoice === correctAnswer) {
        selectedBtn.classList.add('correct');
        score += 0.5;
    } else {
        selectedBtn.classList.add('wrong');
        buttons.forEach(btn => {
            if (btn.innerText === correctAnswer) btn.classList.add('correct');
        });
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < selectedQuestions.length) {
            renderQuestion();
        } else {
            showFinalResult();
        }
    }, 1000);
}

// 6. BỘ ĐẾM GIỜ
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (timerDisplay) {
            timerDisplay.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Hết giờ làm bài!");
            showFinalResult();
        }
        timeLeft--;
    }, 1000);
}

// 7. KẾT QUẢ CUỐI CÙNG
function showFinalResult() {
    clearInterval(timerInterval); 
    const timerContainer = document.getElementById('timer-container');
    if (timerContainer) timerContainer.classList.add('hidden');
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    document.getElementById('final-score').innerText = score.toFixed(1);
}
function startQuiz(phan) {
    // --- PHẦN MỚI: ẨN DONATE ---
    const donateArea = document.querySelector('.donate-container');
    if (donateArea) {
        donateArea.style.display = 'none';
    }

    // --- PHẦN CŨ CỦA BẠN (Đã sửa để không lỗi biến) ---
    currentIndex = 0;
    score = 0;
    timeLeft = 20 * 60;

    // Logic chọn kho câu hỏi
    if (phan === 1) {
        if (typeof hocPhan1 === 'undefined' || hocPhan1.length === 0) {
            alert("Lỗi: Chưa có dữ liệu cho Học phần 1!");
            return;
        }
        currentPool = [...hocPhan1];
    } 
    else if (phan === 2) {
        if (typeof hocPhan2 === 'undefined' || hocPhan2.length === 0) {
            alert("Lỗi: Chưa có dữ liệu cho Học phần 2!");
            return;
        }
        currentPool = [...hocPhan2];
    }

    shuffleArray(currentPool);
    selectedQuestions = currentPool.slice(0, 20);

    // Hiển thị giao diện (Dùng ID trực tiếp cho chắc chắn)
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('timer-container').classList.remove('hidden');
    document.getElementById('quiz-card').classList.remove('hidden');

    startTimer();
    renderQuestion();
}