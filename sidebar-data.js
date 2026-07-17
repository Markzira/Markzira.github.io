// قائمة البرامج الجانبية - ضيف أو عدل براحتك هنا
const sidebarPrograms = [
    {
        title: "أداة سحب فيسبوك",
        description: "استخراج داتا العملاء المهتمين",
        icon: "fab fa-facebook",
        link: "#" // حط الرابط هنا
    },
    {
        title: "مستكشف العقارات",
        description: "تحديثات أسعار المشاريع",
        icon: "fas fa-city",
        link: "#"
    },
    {
        title: "مرسل الواتساب",
        description: "إرسال رسائل جماعية آمنة",
        icon: "fab fa-whatsapp",
        link: "#"
    }
];

// الكود ده بياخد الداتا اللي فوق ويعرضها في الموقع تلقائي
document.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.getElementById('sidebar-programs-list');
    if (sidebarContainer) {
        let htmlContent = '';
        sidebarPrograms.forEach(prog => {
            htmlContent += `
            <div class="sidebar-item" style="cursor: pointer;" onclick="window.location.href='${prog.link}'">
                <i class="${prog.icon}"></i>
                <div class="sidebar-item-info">
                    <h4>${prog.title}</h4>
                    <p>${prog.description}</p>
                </div>
            </div>
            `;
        });
        sidebarContainer.innerHTML = htmlContent;
    }
});
