// جدول بيانات البرامج، ضفتلك فيه خانات للتفاصيل والمميزات والسعر
const softwareData = [
    {
        id: 1,
        title: "TitanSender-pro",
        version: "الإصدار v1.0.9",
        description: "برنامج متقدم لإرسال الرسائل الجماعية وأتمتة الواتساب لإدارة حملاتك التسويقية باحترافية وتخطي الحظر.",
        icon: "fab fa-whatsapp",
        downloadLink: "https://github.com/shabanfox/TitanVelocity/releases/download/v1.0.9/titansender-pro.Setup.1.0.9.exe",
        // البيانات الجديدة لصفحة التفاصيل:
        longDescription: "TitanSender-pro هو الحل الأمثل للشركات والمسوقين لإدارة حملات الواتساب. يوفر لك القدرة على إرسال آلاف الرسائل بضغطة زر مع نظام ذكي لتخطي الحظر، إدارة الردود التلقائية، وفلترة الأرقام لضمان وصول رسالتك للجمهور المستهدف باحترافية تامة.",
        features: ["إرسال رسائل غير محدودة وتخطي الحظر الذكي", "التحكم في الفواصل الزمنية بين الرسائل", "تقارير مفصلة فورية بعد انتهاء الحملة", "دعم إرسال المرفقات (صور، ملفات، فيديوهات)"],
        price: "... باقة اشتراك شهرية فردية (500 جنية بدلا من 650 جنية لفترة محدودة - شاملة التحديثات",
        subscribeLink: "https://wa.me/201092425540"
    },
    {
        id: 2,
        title: "فلتر الأرقام الذكي",
        version: "الإصدار v1.0.0",
        description: "أداة لفرز وتصفية الأرقام واستخراج المتاح منها على الواتساب بدقة وسرعة عالية.",
        icon: "fas fa-filter",
        downloadLink: "#",
        longDescription: "أداة خفيفة وسريعة جداً لمعالجة قوائم الأرقام الكبيرة، وتقسيمها إلى أرقام متاحة على واتساب وأرقام غير متاحة، مما يوفر وقتك ويضمن نجاح حملاتك التسويقية.",
        features: ["سرعة فائقة في فلترة آلاف الأرقام", "حفظ الأرقام الصالحة في ملفات Excel أو TXT", "واجهة استخدام بسيطة وسهلة", "دعم الأرقام الدولية والمحلية"],
        price: "أداة مجانية (مرفقة مع الباقات المدفوعة)",
        subscribeLink: "https://wa.me/201092425540"
    },
    {
        id: 3,
        title: "Titan.FB.Marketer",
        version: "الإصدار v55.0.0",
        description: "أداة للنشر واستخراج الداتا من الفيس بوك بدقة وسرعة عالية.",
        icon: "fab fa-facebook",
        downloadLink: "https://github.com/shabanfox/facebooooooock/releases/download/v55.0/Titan.FB.Marketer.exe",
        longDescription: "برنامج شامل للتحكم في حسابات فيسبوك المتعددة، واستخراج بيانات العملاء المهتمين من المجموعات والصفحات، بالإضافة إلى قدرته على جدولة المنشورات التلقائية لزيادة التفاعل.",
        features: ["سحب داتا العملاء من المجموعات والصفحات", "النشر التلقائي في الجروبات لتسويق منتجك", "إدارة وتدوير حسابات فيسبوك متعددة", "استخراج الأرقام والإيميلات من المنشورات"],
        price: "باقة اشتراك شهرية ب600 جنية بدلا من 900 جنية",
        subscribeLink: "https://wa.me/201092425540"
    }
];

// كود رسم البرامج في صفحة التحميلات
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('software-container');
    if (container) {
        let htmlContent = '';
        softwareData.forEach(software => {
            htmlContent += `
            <div class="card" style="border-top: 4px solid #10b981;">
                <div style="background: rgba(16, 185, 129, 0.1); width: 80px; height: 80px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 20px;">
                    <i class="${software.icon} fa-2x" style="color:#10b981;"></i>
                </div>
                <h3 style="color: #fff; margin-bottom: 5px;">${software.title}</h3>
                <span style="display: block; color: #f59e0b; font-size: 0.85rem; margin-bottom: 10px;">${software.version}</span>
                <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 25px;">${software.description}</p>
                <!-- التعديل هنا: الزرار بيوجه لصفحة التفاصيل -->
                <a href="details.html?id=${software.id}" class="btn-download" style="background: linear-gradient(90deg, #3b82f6, #2563eb);">
                    <i class="fas fa-info-circle"></i> التفاصيل والاشتراك
                </a>
            </div>
            `;
        });
        container.innerHTML = htmlContent;
    }
});
