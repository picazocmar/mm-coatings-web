// components.js - Archivo Maestro para M&M Coatings

// 1. Estilos base para asegurar que los componentes respeten el flujo de Tailwind
const style = document.createElement('style');
style.innerHTML = `
  universal-nav, universal-footer, whatsapp-button { display: block; }
`;
document.head.appendChild(style);

// 2. Componente de Navegación
class UniversalNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-white border-b border-gray-200 fixed w-full z-50 shadow-md transition-all duration-300">
            <div class="container mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
                
                <a href="index.html" class="flex items-center gap-4 shrink-0">
                    <img src="MM_vectorized_HOR.png" alt="M&M Coating" class="h-10 md:h-16 w-auto object-contain">
                </a>

                <!-- Menú Escritorio -->
                <div class="hidden md:flex space-x-8 text-sm font-bold text-slate-600 items-center">
                    <div class="flex items-center px-3 py-1 bg-green-50 rounded border border-green-200">
                        <span class="text-xs text-mm_navy font-extrabold">ISO 9001:2015</span>
                        <svg class="w-4 h-4 ml-1 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    </div>
                    <a href="index.html" class="hover:text-mm_orange transition uppercase tracking-wide">Inicio</a>
                    <a href="index.html#soluciones" class="hover:text-mm_orange transition uppercase tracking-wide">Soluciones</a>
                    <a href="index.html#maquinaria" class="hover:text-mm_orange transition uppercase tracking-wide">Tecnología</a>
                    
                    <!-- Enlace de Laboratorio -->
                    <a href="laboratorio.html" class="hover:text-mm_orange transition uppercase tracking-wide">Laboratorio</a>
                    
                    <!-- Enlace a Intranet ERP -->
                    <a href="https://script.google.com/macros/s/AKfycbzK639tehdQ-lqx-h9DfQaN3QqDe1p2KcAotXbA898ozInmiDRpwkrmf-wZY0lKDQ_HCQ/exec" target="_blank" rel="noopener noreferrer" class="hover:text-mm_navy text-slate-400 transition uppercase tracking-wide flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Intranet
                    </a>

                    <!-- Enlace a Buzón Fiscal -->
                    <a href="buzon_fiscal.html" class="hover:text-mm_navy text-slate-400 transition uppercase tracking-wide flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Buzón Fiscal
                    </a>

                    <a href="cotizar.html" class="ml-4 bg-mm_navy text-white px-6 py-3 rounded shadow hover:bg-mm_orange transition font-bold">
                        Cotizar
                    </a>
                </div>

                <!-- Menú Móvil -->
                <div class="md:hidden flex items-center gap-2">
                    <div class="flex items-center px-2 py-1 bg-green-50 rounded border border-green-200">
                        <span class="text-[10px] text-mm_navy font-extrabold">ISO 9001</span>
                    </div>
                    <!-- Mini enlace a intranet en móvil -->
                    <a href="https://script.google.com/macros/s/AKfycbzK639tehdQ-lqx-h9DfQaN3QqDe1p2KcAotXbA898ozInmiDRpwkrmf-wZY0lKDQ_HCQ/exec" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-mm_navy px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </a>
                    <!-- Mini enlace a Buzón Fiscal en móvil -->
                    <a href="buzon_fiscal.html" class="text-slate-400 hover:text-mm_navy px-2" title="Buzón Fiscal">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </a>
                    <a href="cotizar.html" class="text-xs font-bold text-white bg-mm_navy px-4 py-2 rounded shadow">
                        COTIZAR
                    </a>
                </div>
            </div>
        </nav>
        `;
    }
}
customElements.define('universal-nav', UniversalNav);

// 3. Componente de Footer
class UniversalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-mm_navy text-white py-12 border-t border-blue-900 mt-auto">
            <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
                <div>
                    <span class="font-heading font-extrabold text-xl tracking-tight uppercase">M&M COATINGS</span>
                    <p class="text-blue-200 mt-4 leading-relaxed max-w-xs">
                        Ingeniería de Superficies Certificada. Comprometidos con la calidad y la trazabilidad digital.
                    </p>
                </div>
                <div>
                    <h4 class="font-bold text-mm_orange mb-4 uppercase tracking-wider text-xs">Ubicación Planta</h4>
                    <p class="text-blue-100 leading-relaxed font-semibold">
                       Tarento 33<br>
                       Chipilo de Francisco Javier Mina<br>
                       CP 74325, Puebla
                    </p>
                </div>
                <div class="md:text-right flex flex-col md:items-end">
                    <h4 class="font-bold text-mm_orange mb-4 uppercase tracking-wider text-xs font-heading">Contacto Directo</h4>
                    <a href="mailto:contacto@mmcoatings.mx" class="block text-lg font-bold hover:text-mm_orange transition mb-2">contacto@mmcoatings.mx</a>
                    
                    <!-- Enlace de WhatsApp Oficial -->
                    <a href="https://api.whatsapp.com/send?phone=522216523677&text=Hola,%20busco%20informaci%C3%B3n%20sobre%20sus%20recubrimientos." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-lg font-bold hover:text-[#25D366] transition mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                        <span>+52 221 652 3677</span>
                    </a>

                    <div class="flex gap-2 justify-start md:justify-end mt-4">
                         <span class="bg-white/10 px-2 py-1 rounded text-[10px] font-bold border border-white/20">ISO 9001:2015</span>
                         <span class="bg-white/10 px-2 py-1 rounded text-[10px] font-bold border border-white/20">Dörken Lic.</span>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-6 mt-12 pt-8 border-t border-blue-900 text-center text-[10px] opacity-40 uppercase tracking-widest">
                &copy; 2026 M&M Coatings.
            </div>
        </footer>
        `;
    }
}
customElements.define('universal-footer', UniversalFooter);

// 4. Componente de Botón Flotante WhatsApp
class WhatsappButton extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="https://api.whatsapp.com/send?phone=522216523677&text=Hola,%20busco%20informaci%C3%B3n%20sobre%20sus%20recubrimientos." 
       target="_blank" 
       rel="noopener noreferrer" 
       class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-500 transition-transform hover:scale-110 z-[1000] flex items-center justify-center"
       aria-label="Soporte por WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        </a>
        `;
    }
}

customElements.define('whatsapp-button', WhatsappButton);