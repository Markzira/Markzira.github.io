document.addEventListener("DOMContentLoaded", () => {
    // 1. شريط التنقل (اللوجو في المنتصف، الروابط يميناً، تسجيل الدخول يساراً)
    const navContainer = document.getElementById("global-nav");
    if (navContainer) {
        navContainer.innerHTML = `
            <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
                
                <div style="flex: 1; display: flex; justify-content: flex-start;">
                    <ul id="nav-menu" style="margin: 0; padding: 0; display: flex; gap: 20px;">
                        <li><a href="index.html" id="link-home">الرئيسية</a></li>
                        <li><a href="downloads.html" id="link-downloads">البرامج</a></li>
                        <li><a href="free-programs.html" id="link-free">برامج مجانية</a></li>
                        <li><a href="online-tools.html" id="link-tools">أدوات أونلاين</a></li>
                    </ul>
                </div>

                <div style="flex: 1; display: flex; justify-content: center;">
                    <a href="index.html" class="logo">
                        <i class="fas fa-meteor logo-icon"></i>
                        <span class="logo-text">Mark</span><span class="logo-sub">zira</span>
                    </a>
                </div>
                
                <div style="flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 15px;">
                    <a href="login.html" class="login-btn-nav">تسجيل الدخول</a>
                    <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        `;
        
        // تفعيل قائمة الموبايل
        const toggleBtn = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");
        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener("click", () => {
                navMenu.classList.toggle("active");
                toggleBtn.querySelector("i").classList.toggle("fa-bars");
                toggleBtn.querySelector("i").classList.toggle("fa-times");
            });
        }
    }

    // 2. الفوتر (Footer) باللغة العربية
    const footerContainer = document.getElementById("global-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="container" style="text-align: center; padding: 30px 0;">
                <p style="margin-bottom: 10px; color: #fff;">© 2026 منصة Markzira - لتطوير البرمجيات وأدوات التسويق.</p>
                <p style="color: #64748b; font-size: 0.9rem;">
                    <i class="fas fa-code" style="color: #f59e0b;"></i> تطوير وإدارة: فريق ماركزيرا (Markzira)
                </p>
            </div>
        `;
    }

    // 3. كود العدادات (Stats Counters)
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20); 
            } else {
                counter.innerText = target.toLocaleString(); 
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });
        observer.observe(counter);
    });
});
