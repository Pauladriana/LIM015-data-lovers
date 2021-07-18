
    //Propiedades slider
    const propSlider = {
        slider: document.getElementById('slider'),
        primerSlide: ""
    }

    //Metodos Slider
    const metSlider = {
        inicio: function(){
            setInterval(metSlider.moverSlider, 5000)
        },
    
        moverSlider: function(){
            propSlider.slider.style.transition = 'all 2s ease';
            propSlider.slider.style.marginLeft = "-101.25%";
    
            setTimeout(function(){
                propSlider.primerSlide = propSlider.slider.firstElementChild;
                propSlider.slider.appendChild(propSlider.primerSlide);
                propSlider.slider.style.transition = 'unset';
                propSlider.slider.style.marginLeft = 0;

            }, 3000)
        }
    }

    metSlider.inicio();