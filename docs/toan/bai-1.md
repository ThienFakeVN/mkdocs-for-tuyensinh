*⚠️ Trang này vẫn còn sơ khai, bạn có thể đóng góp thêm thông tin cho nó*

**Bài 1** là bài đầu tiên của một đề tuyển sinh môn Toán. Bài 1 yêu cầu thí sinh phải vẽ đồ thị $(P)$ của một phương trình bậc hai có dạng $y = ax^2$ (với $a$ là một số cho trước) và tìm tọa độ của một hoặc hai điểm thuộc đồ thị đó với điều kiện đã cho trước.

# Cách làm bài 1
## Câu a
Ở câu a, thí sinh cần phải lập bảng giá trị của phương trình $y = ax^2$ bằng cách lấy các giá trị khác nhau của $x$ (tối thiểu là 5), tính giá trị $y$ tương ứng, rồi dựa vào đó để vẽ đồ thị $(P)$ của hàm số. Giả sử thí sinh lấy 5 giá trị, đây là danh sách các yêu cầu của các giá trị dưới đây:
- 5 giá trị được sắp xếp theo trình tự từ giá trị thấp đến giá trị lớn;
- 2 giá trị đầu tiên của $x$ luôn là số âm và ngược dấu với 2 giá trị cuối cùng, trong khi giá trị thứ 3 luôn là $0$ (ví dụ: $-4$, $-2$, $0$, $2$, $4$);
- Giá trị thứ nhất và thứ 5 luôn gấp đôi so với lần lượt giá trị thứ 2 và thứ 4;

Số $a$ có thể là một số hoặc phân số bất kỳ. Tuy nhiên chúng có phạm vi từ $-2$ đến $2$ và, nếu là phân số, sẽ có mẫu là $2$ hoặc $4$. Nếu $a$ không thuộc phạm vi này, việc vẽ parabol sử dụng thước sẽ gần như bất khả thi.

### Kiến thức cần học
Câu a bài 1 câu đơn giản nhất đề tuyển sinh. Học sinh chỉ cần học cách lập bảng giá trị và vẽ đồ thị parabol.

__Lập bảng giá trị__

*⚠️ Mục này có mã vẫn đang được phát triển, bạn có thể giúp điều chỉnh nó*

Bạn có thể xem bảng giá trị được lập dựa trên số $a$ mà bạn nhập dưới đây:

| $x$        | <p id="x1"></p> | <p id="x2"></p> | $0$ | <p id="x3"></p> | <p id="x4"></p> |
|------------|-----------------|-----------------|-----|-----------------|-----------------|
| $y = ax^2$ | <p id="y1"></p> | <p id="y2"></p> | $0$ | <p id="y3"></p> | <p id="y4"></p> |

<strong style="color:red" id="alert"></strong>

<div id="integerDiv">
    <input placeholder="Nhập một số" id="integerInput">
    <button onclick="toFraction()">Đổi sang phân số</button>
</div>
<div id="fractionDiv" style="display:none">
    <input placeholder="Nhập tử số" id="numeratorInput"> <input placeholder="Nhập mẫu số" id="denominatorInput">
    <button onclick="toInteger()">Đổi sang số</button>
</div>

<script scr="docs/javascripts/1a.js"></script>