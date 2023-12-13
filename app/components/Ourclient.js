import React from 'react'

function Ourclient() {
    return (
        <div className=''>
            <section className="bg-slate-950 rounded">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2
                        className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-300 dark:text-white md:text-4xl">
                        More than 50+ business build by Our team.
                    </h2>

                    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    class="  w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src="https://static.wixstatic.com/media/9d3143_befa4a3aeb784b21a7423d619de59f2d~mv2.png/v1/crop/x_287,y_394,w_525,h_391/fill/w_290,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20200928_2242010_7851049892251415.png" 
            alt="LuxPresso" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110 filter-silver"
            />
        </li>


        
        <li>
            <img src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-logo.svg" 
            alt="Myntra" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110 filter-silver"
            />
        </li>

        <li>
            <img src="https://upload.wikimedia.org/wikipedia/en/0/00/Nykaa_New_Logo.svg" 
            alt="Nykaa_New_Logo" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110 filter-silver"
            />
        </li>

        <li>
            <img src="https://i.ibb.co/qjn4M3S/30698211-1842400882478291-1655402952770191360-n-removebg-preview-1.png" 
            alt="Nykaa_New_Logo" 
            className="h-16"
            />
        </li>
        <li>
            <img src="./Havells_Logo.svg" 
            alt="Havells_Logo" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110"
            />
        </li>
        <li>
            <img src="https://image.slidesharecdn.com/glocaljunctionbranddeck-220316092809/75/glocal-junction-brand-deck-1-2048.jpg" 
            alt="glocaljuctiion" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110"
            />
        </li>

    </ul>  
    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src="https://static.wixstatic.com/media/9d3143_befa4a3aeb784b21a7423d619de59f2d~mv2.png/v1/crop/x_287,y_394,w_525,h_391/fill/w_290,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20200928_2242010_7851049892251415.png" 
            alt="LuxPresso" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110 filter-silver"
            />
        </li>


        
        <li>
            <img src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-logo.svg" 
            alt="Myntra" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110 filter-silver"
            />
        </li>

        <li>
            <img src="https://upload.wikimedia.org/wikipedia/en/0/00/Nykaa_New_Logo.svg" 
            alt="Nykaa_New_Logo" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110 filter-silver"
            />
        </li>

        <li>
            <img src="https://i.ibb.co/qjn4M3S/30698211-1842400882478291-1655402952770191360-n-removebg-preview-1.png" 
            alt="Nykaa_New_Logo" 
            className="h-16"
            />
        </li>
        <li>
            <img src="./Havells_Logo.svg" 
            alt="Havells_Logo" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110"
            />
        </li>
        <li>
            <img src="https://image.slidesharecdn.com/glocaljunctionbranddeck-220316092809/75/glocal-junction-brand-deck-1-2048.jpg" 
            alt="glocaljuctiion" 
            class="h-16 filter grayscale-100 brightness-80 contrast-110"
            />
        </li>

    </ul>                
</div>

                </div>
            </section>



        </div>
    )
}

export default Ourclient