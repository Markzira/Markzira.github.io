// جدول بيانات البرامج، يمكنك إضافة أي برنامج جديد بنسخ القالب وتغيير البيانات.
const softwareData = [
    {
        id: 1,
        title: "TitanSender-pro",
        version: "الإصدار v1.0.9",
        description: "برنامج متقدم لإرسال الرسائل الجماعية وأتمتة الواتساب لإدارة حملاتك التسويقية باحترافية وتخطي الحظر.",
        icon: "fab fa-whatsapp",
        downloadLink: "https://github.com/shabanfox/TitanVelocity/releases/download/v1.0.9/titansender-pro.Setup.1.0.9.exe"
    },
    {
        id: 2,
        title: "فلتر الأرقام الذكي",
        version: "الإصدار v1.0.0",
        description: "أداة لفرز وتصفية الأرقام واستخراج المتاح منها على الواتساب بدقة وسرعة عالية.",
        icon: "fas fa-filter",
        downloadLink: "#" 
    },
    {
        id: 3,
        title: "Titan.FB.Marketer",
        version: "الإصدار v55.0.0",
        description: "أداة للنشر واستخراج الداتا من الفيس بوك بدقة وسرعة عالية.",
        icon: "fab fa-facebook", // تم تعديل الأيقونة هنا
        downloadLink: "https://github.com/shabanfox/facebooooooock/releases/download/v55.0/Titan.FB.Marketer.exe" 
    }
];

// كود رسم البرامج تلقائياً في صفحة التحميلات
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
                <a href="${software.downloadLink}" class="btn-download" ${software.downloadLink !== '#' ? 'target="_blank"' : ''}>
                    <i class="fas fa-cloud-download-alt"></i> تحميل برابط مباشر
                </a>
            </div>
            `;
        });
        container.innerHTML = htmlContent;
    }
});
