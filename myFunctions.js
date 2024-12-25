$(function () {
    const orderFormSection = $('#form');
    const orderForm = $('#order-form');
    const selectedBookSpan = $('#selected-book');
    orderFormSection.hide();

   
    $('.select-btn').on('click', function () {
        const bookTitle = $(this).data('title');
        const bookPrice = $(this).data('price');
 
        selectedBookSpan.text(`${bookTitle} - ${bookPrice}`);
        orderFormSection.slideToggle();
        orderForm[0].reset();
    });

    
    orderForm.on('submit', function (e) {
        e.preventDefault();
 
        const fullName = $('#full-name').val().trim();
        const nationalId = $('#national-id').val().trim();
        const birthDate = $('#birth-date').val();
        const phone = $('#phone').val().trim();
        const email = $('#email').val().trim();

        
        if (!/^\d{11}$/.test(nationalId)) {
            alert('الرقم الوطني غير صحيح. يجب أن يحتوي على 11 رقمًا.');
            return;
        }

   
        if (fullName && !/^[\u0621-\u064A\s]+$/.test(fullName)) {
            alert('يرجى إدخال الاسم باللغة العربية فقط.');
            return;
        }

     
        if (birthDate) {
            const enteredDate = new Date(birthDate);
            const today = new Date();

            if (enteredDate >= today) {
                alert('تاريخ الميلاد غير صحيح. يجب أن يكون في الماضي.');
                return;
            }
        }


        if (phone && !/^(09[3-9])\d{7}$/.test(phone)) {
            alert('يرجى إدخال رقم موبايل صحيح يتبع لشبكة سيرياتيل أو MTN.');
            return;
        }

      
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح.');
            return;
        }

   
        alert('تم إرسال الطلب بنجاح!');

     
        orderForm[0].reset();
        orderFormSection.slideUp();
    });
});
