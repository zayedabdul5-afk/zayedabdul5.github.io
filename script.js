function sendToWhatsApp(button) {
    const card = button.parentElement;
    const product = card.getAttribute('data-product');
    const price = card.getAttribute('data-price');
    const playerID = card.querySelector('.id-input').value;
    const myNumber = "201080396765"; // رقمك بصيغة دولية

    if (playerID.trim() === "" || playerID.length < 5) {
        alert("يرجى إدخال ID اللاعب أولاً!");
        return;
    }

    // تجهيز نص الرسالة
    const message = `أهلاً نعناع ستور، أريد شراء:
📦 المنتج: ${product}
💰 السعر: ${price} EGP
🆔 الآيدي: ${playerID}
💳 وسيلة الدفع: فودافون كاش / إنستا باي`;

    // تحويل النص لرابط واتساب
    const whatsappURL = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;

    // فتح الرابط
    window.open(whatsappURL, '_blank');
}
