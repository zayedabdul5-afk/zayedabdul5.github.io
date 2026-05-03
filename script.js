// تبديل الألعاب
function switchGame(evt, gameId) {
    let i, content, btns;
    content = document.getElementsByClassName("game-content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
        content[i].classList.remove("active");
    }
    btns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    document.getElementById(gameId).style.display = "block";
    document.getElementById(gameId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// دالة الطلب عبر الواتساب
function order(game, pack) {
    const whatsappNum = "201114143599";
    const paymentNum = "01155906117";
    const message = `مرحباً اسكندر،
أريد طلب شحن ${game}
الباقة: ${pack}
لقد رأيت رقم التحويل: ${paymentNum}
سأرسل لك صورة التحويل (سكرين شوت) الآن.`;

    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`, '_blank');
}
