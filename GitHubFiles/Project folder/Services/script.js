
        function toggleTestimonials() {
            var testimonials = document.querySelectorAll('.testimonial');
            testimonials.forEach(function(testimonial) {
                testimonial.style.display = (testimonial.style.display === 'none') ? 'block' : 'none';
            });
        }
        
        