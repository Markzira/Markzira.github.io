navContainer.innerHTML = `
            <div class="promo-banner">
                <span>🔥 عرض لفترة محدودة! اشترك في TitanSender-pro بـ 10 جنيه بس في اليوم!</span>
                <a href="index.html#pricing" class="promo-btn">احصل على العرض</a>
            </div>

            <div class="container" style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                
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
