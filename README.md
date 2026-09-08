# F.CSA313 Lab 1 – Playwright UI Testing

B232270019 О.Оюунжаргал 

### Ашигласан технологи

* JavaScript
* Playwright
* Node.js
* Git / GitHub

### Хийсэн тестүүд

* Амжилттай нэвтрэх
* Амжилтгүй нэвтрэх
* Бараа сагсанд нэмэх

Тестүүдэд `getByRole()`, `getByPlaceholder()`, `getByText()` locator болон `expect()` assertion ашигласан.

### Codegen

Playwright Codegen ашиглан тестийн код үүсгэж, өөрийн бичсэн кодтой харьцуулсан ба ингэхэд Codegen нь  ихэвчлэн data-test locator ашиглан код үүсгэсэн мөн товч дарах үйлдэл гэх мэт үйлдэл бүрийг илүү нарийн бичдэг санагдсан. Харин өөрийн бичсэн тестүүдэд getByRole(), getByPlaceholder(), getByText() зэрэг locator-уудыг ашиглаж, expect() assertion-аар үр дүнг шалгасан. 
### Trace Viewer

Тестийг зориудаар fail болгож Trace Viewer ашиглан алдааг шалгасан.

* `docs/failed-trace.zip`
* `docs/added-product-trace.zip`

### Playwright vs Selenium

Playwright болон Selenium хоёулаа веб програмын UI тест автоматжуулахад ашиглагддаг. Selenium нь олон жилийн турш өргөн ашиглагдсан тестийн framework бөгөөд олон browser болон programming language дэмждэг. Playwright нь орчин үеийн веб application-д зориулж бүтээгдсэн бөгөөд Chromium, Firefox, WebKit-ийг дэмждэг. Playwright нь element-ийн төлөвийг автоматаар хүлээдэг тул олон тохиолдолд нэмэлт wait бичих шаардлагагүй. Мөн Playwright нь Trace Viewer зэрэг debugging боломжуудыг шууд дэмждэг. Лабын хүрээнд Playwright-ийн locator болон auto-wait механизм нь тест бичихэд илүү хялбар санагдсан.

