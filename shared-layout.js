document.addEventListener("DOMContentLoaded", () => {
    // 1. Navigation Bar (Logo Center, Links Right, Login Left)
    const navContainer = document.getElementById("global-nav");
    if (navContainer) {
        navContainer.innerHTML = `
            <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
                <!-- Left Side (Login & Mobile Menu) -->
                <div style="flex: 1; display: flex; justify-content: flex-start; align-items: center; gap: 15px;">
                    <a href="login.html" class="login-btn-nav">Login</a>
                    <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                
                <!-- Center (Logo) -->
                <div style="flex: 1; display: flex; justify-content: center;">
                    <a href="index.html" class="logo">
                        <i class="fas fa-meteor logo-icon"></i>
                        <span class="logo-text">Mark</span><span class="logo-sub">zira</span>
                    </a>
                </div>

                <!-- Right Side (Page Links) -->
                <div style="flex: 1; display: flex; justify-content: flex-end;">
                    <ul id="nav-menu" style="margin: 0; padding: 0;">
                        <li><a href="index.html" id="link-home">Home</a></li>
                        <li><a href="downloads.html" id="link-downloads">Pro Tools</a></li>
                        <li><a href="free-programs.html" id="link-free">Free Software</a></li>
                        <li><a href="online-tools.html" id="link-tools">Online Tools</a></li>
                    </ul>
                </div>
            </div>
        `;
        
        // Mobile menu functionality
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

    // 2. Footer
    const footerContainer = document.getElementById("global-footer");
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="container" style="text-align: center; padding: 30px 0;">
                <p style="margin-bottom: 10px; color: #fff;">© 2026 Markzira Platform - Titan Marketing Suite.</p>
                <p style="color: #64748b; font-size: 0.9rem;">
                    <i class="fas fa-code" style="color: #f59e0b;"></i> Developed by Markzira Team - Powered by Scrapixy
                </p>
            </div>
        `;
    }

    // 3. Animated Counters Logic
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // سرعة العداد (كلما قل الرقم كان أسرع)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20); // تحديث كل 20 ملي ثانية
            } else {
                counter.innerText = target.toLocaleString(); // وضع الفاصلة للألوف
            }
        };
        
        // تشغيل العداد فقط عند الوصول إليه بالنزول في الصفحة (Scroll)
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });
        observer.observe(counter);
    });
});
