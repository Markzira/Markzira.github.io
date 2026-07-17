document.addEventListener("DOMContentLoaded", () => {  
    // 1. Render Navigation Bar  
    const navContainer = document.getElementById("global-nav");  
    if (navContainer) {  
        navContainer.innerHTML = `  
            <div class="container">  
                <a href="index.html" class="logo">  
                    <i class="fas fa-meteor logo-icon"></i>  
                    <span class="logo-text">Mark</span>  
                    <span class="logo-sub">zira</span>  
                </a>  
                <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">  
                    <i class="fas fa-bars"></i>  
                </button>  
                <ul id="nav-menu">  
                    <li><a href="index.html" id="link-home">الرئيسية</a></li>  
                    <li><a href="index.html#programs" id="link-programs">حزمة البرامج</a></li>  
                    <li><a href="downloads.html" id="link-downloads">مركز التحميل</a></li>  
                    <li><a href="tutorials.html" id="link-tutorials">الشروحات</a></li>  
                    <li><a href="support.html" id="link-support">الدعم الفني</a></li>  
                    <li><a href="login.html" class="login-btn-nav">تسجيل الدخول</a></li>  
                </ul>  
            </div>  
        `;  
          
        // Mobile Toggle Functionality  
        const toggleBtn = document.getElementById("menu-toggle");  
        const navMenu = document.getElementById("nav-menu");  
        if (toggleBtn && navMenu) {  
            toggleBtn.addEventListener("click", () => {  
                navMenu.classList.toggle("active");  
                toggleBtn.querySelector("i").classList.toggle("fa-bars");  
                toggleBtn.querySelector("i").classList.toggle("fa-times");  
            });  
        }  
  
        // Highlight Active Link  
        const path = window.location.pathname;  
        const page = path.split("/").pop();  
        if (page === "index.html" || page === "") {  
            document.getElementById("link-home")?.classList.add("active-link");  
        } else if (page === "downloads.html") {  
            document.getElementById("link-downloads")?.classList.add("active-link");  
        } else if (page === "tutorials.html") {  
            document.getElementById("link-tutorials")?.classList.add("active-link");  
        } else if (page === "support.html") {  
            document.getElementById("link-support")?.classList.add("active-link");  
        }  
    }  
  
    // 2. Render Footer  
    const footerContainer = document.getElementById("global-footer");  
    if (footerContainer) {  
        footerContainer.innerHTML = `  
            <div class="container">  
                <p style="margin-bottom: 10px; color: #fff;">© 2026 Markzira Platform - المظلة التقنية لبرامج Titan Marketing Suite.</p>  
                <p style="color: #64748b; font-size: 0.9rem;">  
                    <i class="fas fa-code" style="color: #f59e0b;"></i> تطوير وإدارة: فريق Markzira للحلول البرمجية - إحدى برمجيات Scrapixy  
                </p>  
            </div>  
        `;  
    }  
});
