$(document).ready(function () {
    // إخفاء نموذج الطلب في البداية
    const orderFormSection = $('#form');
    orderFormSection.hide();

    // تحديد الكتاب المختار
    $('.select-btn').click(function () {
        const bookTitle = $(this).data('title');
        const bookPrice = $(this).data('price');

        // إذا كان نموذج الطلب مرئيًا بالفعل، إخفاؤه
        if (orderFormSection.is(':visible')) {
            orderFormSection.hide();
        } else {
            // عرض الكتاب المختار في النموذج
            $('#selected-book').text(`${bookTitle} - ${bookPrice}`);

            // إظهار نموذج الطلب بعد اختيار الكتاب
            orderFormSection.show();

            // إعادة تعيين النموذج
            $('#order-form')[0].reset();
        }
    });

    // معالجة إرسال النموذج
    $('#order-form').submit(function (e) {
        e.preventDefault();

        const nationalId = $('#national-id').val();

        // التحقق من إدخال الرقم الوطني فقط
        if (!nationalId) {
            alert('يرجى إدخال الرقم الوطني. هذا الحقل مطلوب.');
            return;
        }

        // عرض رسالة النجاح
        alert('تم إرسال الطلب بنجاح!');

        // إعادة تعيين النموذج بعد الإرسال
        $(this)[0].reset();
        orderFormSection.hide();
    });
});
