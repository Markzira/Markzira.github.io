// 1. جدول بيانات برامج Titan
const softwareData = [
    {
        id: 1,
        title: "TitanSender-pro",
        version: "الإصدار v1.0.9",
        description: "برنامج متقدم لإرسال الرسائل الجماعية وأتمتة الواتساب لإدارة حملاتك التسويقية باحترافية وتخطي الحظر.",
        icon: "fab fa-whatsapp",
        downloadLink: "https://github.com/shabanfox/TitanVelocity/releases/download/v1.0.9/titansender-pro.Setup.1.0.9.exe",
        longDescription: "TitanSender-pro هو الحل الأمثل للشركات والمسوقين لإدارة حملات الواتساب. يوفر لك القدرة على إرسال آلاف الرسائل بضغطة زر مع نظام ذكي لتخطي الحظر، إدارة الردود التلقائية، وفلترة الأرقام لضمان وصول رسالتك للجمهور المستهدف باحترافية تامة.",
        features: ["إرسال رسائل غير محدودة وتخطي الحظر الذكي", "التحكم في الفواصل الزمنية بين الرسائل", "تقارير مفصلة فورية بعد انتهاء الحملة", "دعم إرسال المرفقات (صور، ملفات، فيديوهات)"],
        price: "باقة اشتراك شهرية فردية (500 جنية بدلاً من 650 جنية لفترة محدودة) - شاملة التحديثات",
        subscribeLink: "201092425540",
        videoLink: "https://youtu.be/_Yx22RMZj7I" 
    },
    {
        id: 2,
        title: "فلتر الأرقام الذكي",
        version: "الإصدار v1.0.0",
        description: "أداة لفرز وتصفية الأرقام ,واضافة كود الدولة وتقسيم الشيت لعدد من الشيت .",
        icon: "fas fa-filter",
        downloadLink: "https://github.com/shabanfox/-/releases/download/filter_app.py/SmartNumberFilter.py",
        longDescription: "أداة خفيفة وسريعة جداً لمعالجة قوائم الأرقام الكبيرة، وتقسيمها إلى أرقام متاحة على واتساب وأرقام غير متاحة، مما يوفر وقتك ويضمن نجاح حملاتك التسويقية.",
        features: ["سرعة فائقة في فلترة آلاف الأرقام", "حفظ الأرقام الصالحة في ملفات Excel أو TXT", "واجهة استخدام بسيطة وسهلة", "دعم الأرقام الدولية والمحلية"],
        price: "أداة مجانية (مرفقة مع الباقات المدفوعة)",
        subscribeLink: "201092425540",
        videoLink: "" 
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
        price: "باقة اشتراك شهرية بـ 600 جنية بدلاً من 900 جنية",
        subscribeLink: "201092425540",
        videoLink: "" 
    }
];

// 2. جدول بيانات المشاريع والحلول الأخرى
const projectsData = [
    {
        title: "الاستشارات والتسويق العقاري",
        description: "إدارة بيانات العملاء وتقديم استشارات وحلول بيعية لمشروعات كبرى المطورين مثل معمار الواحد، تاج مصر، أرابيا هولدنج، ليفينج ياردز، وماس.",
        icon: "fas fa-building",
        link: "#" // ممكن نربطه بصفحة تواصل مستقبلاً
    },
    {
        title: "يوميات في المواصلات",
        description: "صفحة ترفيهية على فيسبوك تقدم محتوى يومي وجدول تفاعلات باستخدام شخصية الكارتون 'المواصلاتي'.",
        icon: "fas fa-bus",
        link: "#" // ممكن تحط لينك الصفحة هنا
    }
];

// 3. كود رسم البيانات في الصفحات المختلفة
document.addEventListener("DOMContentLoaded", () => {
    
    // أ- رسم البرامج في صفحة التحميلات (downloads.html)
    const downloadsContainer = document.getElementById('software-container');
    if (downloadsContainer) {
        let htmlContent = '';
        softwareData.forEach(software => {
            htmlContent += createSoftwareCard(software);
        });
        downloadsContainer.innerHTML = htmlContent;
    }

    // ب- رسم البرامج في الصفحة الرئيسية (index.html)
    const homeTitanContainer = document.getElementById('home-titan-container');
    if (homeTitanContainer) {
        let htmlContent = '';
        // هنعرض أول 3 برامج بس في الرئيسية كواجهة
        softwareData.slice(0, 3).forEach(software => {
            htmlContent += createSoftwareCard(software);
        });
        homeTitanContainer.innerHTML = htmlContent;
    }

    // ج- رسم المشاريع الأخرى في الصفحة الرئيسية (index.html)
    const homeProjectsContainer = document.getElementById('home-projects-container');
    if (homeProjectsContainer) {
        let htmlContent = '';
        projectsData.forEach(project => {
            htmlContent += `
            <div class="card" style="border-top: 4px solid #f59e0b;">
                <div style="background: rgba(245, 158, 11, 0.1); width: 80px; height: 80px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 20px;">
                    <i class="${project.icon} fa-2x" style="color:#f59e0b;"></i>
                </div>
                <h3 style="color: #fff; margin-bottom: 15px;">${project.title}</h3>
                <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 25px;">${project.description}</p>
                <a href="${project.link}" class="btn-download" style="background: transparent; border: 1px solid #f59e0b; color: #f59e0b;">
                    <i class="fas fa-external-link-alt"></i> استكشف المزيد
                </a>
            </div>
            `;
        });
        homeProjectsContainer.innerHTML = htmlContent;
    }
});

// دالة مساعدة لرسم كارت البرنامج عشان منكررش الكود
function createSoftwareCard(software) {
    return `
    <div class="card" style="border-top: 4px solid #10b981;">
        <div style="background: rgba(16, 185, 129, 0.1); width: 80px; height: 80px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin: 0 auto 20px;">
            <i class="${software.icon} fa-2x" style="color:#10b981;"></i>
        </div>
        <h3 style="color: #fff; margin-bottom: 5px;">${software.title}</h3>
        <span style="display: block; color: #f59e0b; font-size: 0.85rem; margin-bottom: 10px;">${software.version}</span>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 15px;">${software.description}</p>
        <p style="color: #10b981; font-weight: bold; font-size: 0.95rem; margin-bottom: 25px; padding: 10px; background: rgba(16, 185, 129, 0.1); border-radius: 8px;">
            <i class="fas fa-tag"></i> ${software.price}
        </p>
        <a href="details.html?id=${software.id}" class="btn-download" style="background: linear-gradient(90deg, #3b82f6, #2563eb);">
            <i class="fas fa-info-circle"></i> التفاصيل والاشتراك
        </a>
    </div>
    `;
}
