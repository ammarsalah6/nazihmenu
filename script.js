function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        function showAllProducts() {
            const firstProduct = document.querySelector('.category');
            firstProduct.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Function to toggle products
        function toggleProducts(button) {
            const categorySection = button.closest('.category');
            const hiddenProducts = categorySection.querySelectorAll('.hidden-product');
            const isHidden = hiddenProducts[0].style.display === 'block';

            if (isHidden) {
                hiddenProducts.forEach(product => {
                    product.style.display = 'none';
                });
                button.textContent = 'عرض المزيد';
            } else {
                hiddenProducts.forEach(product => {
                    product.style.display = 'block';
                });
                button.textContent = 'عرض الأقل';
            }
        }
        
        // Simple animation on scroll
        window.addEventListener('scroll', function() {
            const categories = document.querySelectorAll('.category');
            categories.forEach(category => {
                const position = category.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(position < screenPosition) {
                    category.style.opacity = '1';
                    category.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            const categories = document.querySelectorAll('.category');
            categories.forEach(category => {
                category.style.opacity = '0';
                category.style.transform = 'translateY(20px)';
                category.style.transition = 'all 0.6s ease';
            });
            
            setTimeout(() => {
                categories.forEach((category, index) => {
                    setTimeout(() => {
                        const position = category.getBoundingClientRect().top;
                        const screenPosition = window.innerHeight / 1.3;
                        
                        if(position < screenPosition) {
                            category.style.opacity = '1';
                            category.style.transform = 'translateY(0)';
                        }
                    }, index * 100);
                });
            }, 500);
        });