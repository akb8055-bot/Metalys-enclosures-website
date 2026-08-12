const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const dialog = document.querySelector('[data-quote-dialog]');

const arabicTranslations = {
  'Skip to content': 'تخطي إلى المحتوى',
  'Products': 'المنتجات',
  'Capabilities': 'القدرات',
  'Process': 'آلية العمل',
  'Why Metalys': 'لماذا ميتاليس',
  'Compliance': 'الامتثال',
  'Downloads': 'التنزيلات',
  'Contact': 'اتصل بنا',
  'Request a quote': 'طلب عرض سعر',
  'Built to protect.': 'صُممت للحماية.',
  'Engineered to perform.': 'وهُندست للأداء.',
  'Custom enclosures designed, manufactured, powder coated, and inspected under one quality-driven process.': 'خزائن معدنية مخصصة يتم تصميمها وتصنيعها وطلاؤها بالمسحوق وفحصها ضمن عملية متكاملة تركز على الجودة.',
  'Start your project': 'ابدأ مشروعك',
  'Explore capabilities': 'استكشف قدراتنا',
  'Custom': 'حلول',
  'engineering': 'هندسية مخصصة',
  'Stage powder': 'مراحل الطلاء',
  'coating process': 'بالمسحوق',
  'Inspected before': 'تم الفحص قبل',
  'delivery': 'التسليم',
  'From drawing board': 'من لوحة الرسم',
  'to finished enclosure.': 'إلى الخزانة المكتملة.',
  'Metalys turns demanding specifications into production-ready enclosures. Our industrial design experience and controlled manufacturing workflow keep quality, fit, and finish aligned from the first prototype onward.': 'تحوّل ميتاليس المواصفات المعقدة إلى خزائن جاهزة للإنتاج. وتضمن خبرتنا في التصميم الصناعي وسير العمل المنضبط اتساق الجودة والدقة والتشطيب منذ النموذج الأولي.',
  'Design & Prototyping': 'التصميم والنماذج الأولية',
  'Production-minded enclosure development using AutoCAD and SolidWorks, guided by industrial designers with deep practical experience.': 'تطوير خزائن قابلة للتصنيع باستخدام AutoCAD وSolidWorks بإشراف مصممين صناعيين ذوي خبرة عملية واسعة.',
  'Concept development': 'تطوير المفاهيم',
  '3D CAD modelling': 'النمذجة ثلاثية الأبعاد',
  'Prototype refinement': 'تحسين النماذج الأولية',
  'Precision Manufacturing': 'التصنيع الدقيق',
  'Accurate sheet metal manufacturing executed to the approved design, with attention to repeatability and assembly-ready results.': 'تصنيع دقيق للصفائح المعدنية وفق التصميم المعتمد مع التركيز على قابلية التكرار والجاهزية للتجميع.',
  'Sheet metal fabrication': 'تصنيع الصفائح المعدنية',
  'Custom configurations': 'تكوينات مخصصة',
  'Production consistency': 'اتساق الإنتاج',
  'Powder Coating': 'الطلاء بالمسحوق',
  'A controlled seven-stage powder coating process delivers a durable, consistent finish suited to demanding industrial environments.': 'توفر عملية طلاء بالمسحوق من سبع مراحل تشطيباً متيناً ومتسقاً يناسب البيئات الصناعية الصعبة.',
  'Seven-stage preparation': 'تحضير من سبع مراحل',
  'Durable surface finish': 'تشطيب سطحي متين',
  'Consistent colour application': 'تطبيق متسق للألوان',
  'Quality Inspection': 'فحص الجودة',
  'Every completed enclosure passes a thorough quality inspection before release, verifying the promised standard before delivery.': 'تخضع كل خزانة مكتملة لفحص جودة شامل قبل اعتمادها لضمان مطابقتها للمستوى المطلوب قبل التسليم.',
  'Final visual inspection': 'الفحص البصري النهائي',
  'Specification checks': 'التحقق من المواصفات',
  'Delivery release control': 'اعتماد التسليم',
  'Research & Development': 'البحث والتطوير',
  'Our dedicated R&D team supports new projects and product development, turning early concepts and technical challenges into practical, production-ready solutions.': 'يدعم فريق البحث والتطوير المتخصص لدينا المشاريع الجديدة وتطوير المنتجات، ويحوّل الأفكار الأولية والتحديات التقنية إلى حلول عملية جاهزة للإنتاج.',
  'New product development': 'تطوير المنتجات الجديدة',
  'Feasibility and concept engineering': 'دراسات الجدوى وهندسة المفاهيم',
  'Prototype testing and refinement': 'اختبار النماذج الأولية وتحسينها',
  'Enclosures for every': 'خزائن لكل',
  'critical environment.': 'بيئة حرجة.',
  "Purpose-built systems for power distribution, infrastructure, energy, and marine applications, engineered around each project's operating and compliance requirements.": 'أنظمة مصممة خصيصاً لتوزيع الطاقة والبنية التحتية والطاقة والتطبيقات البحرية وفق متطلبات التشغيل والامتثال لكل مشروع.',
  'Power Distribution': 'توزيع الطاقة',
  'Electrical &': 'الكهرباء و',
  'Switchgear': 'لوحات التوزيع',
  'Complete switchgear enclosures': 'خزائن لوحات التوزيع المتكاملة',
  'Distribution boards (DBs)': 'لوحات التوزيع (DBs)',
  'Sub-main distribution boards (SMDBs)': 'لوحات التوزيع الفرعية الرئيسية (SMDBs)',
  'Feeder pillars': 'خزائن التغذية',
  'Form 4 enclosures': 'خزائن Form 4',
  'Built Environment': 'البيئة العمرانية',
  'Construction &': 'الإنشاءات و',
  'Infrastructure': 'البنية التحتية',
  'Construction enclosures': 'خزائن مواقع الإنشاء',
  'HVAC control panels': 'لوحات تحكم HVAC',
  'Custom control cabinets': 'خزائن تحكم مخصصة',
  'Indoor and outdoor enclosures': 'خزائن داخلية وخارجية',
  'Power & Storage': 'الطاقة والتخزين',
  'Energy': 'أنظمة',
  'Systems': 'الطاقة',
  'Energy-sector enclosures': 'خزائن قطاع الطاقة',
  'Battery cabinets': 'خزائن البطاريات',
  'Battery racks': 'حوامل البطاريات',
  'Equipment and control housings': 'هياكل المعدات والتحكم',
  'Offshore & Vessel': 'البحر والسفن',
  'Marine': 'التطبيقات',
  'Applications': 'البحرية',
  'Marine-grade enclosures': 'خزائن بالمواصفات البحرية',
  'Ship console boxes': 'صناديق وحدات تحكم السفن',
  'Navigation and control housings': 'هياكل الملاحة والتحكم',
  'Corrosion-resistant cabinets': 'خزائن مقاومة للتآكل',
  'A clear path from': 'مسار واضح من',
  'brief to build.': 'المتطلبات إلى التصنيع.',
  'One connected workflow gives your team visibility at every stage and reduces the handoff gaps that slow industrial projects down.': 'يمنح سير العمل المترابط فريقك رؤية واضحة في كل مرحلة ويقلل فجوات التسليم التي تؤخر المشاريع الصناعية.',
  'Define': 'التحديد',
  'Share drawings, quantities, environment, and finish requirements.': 'شارك الرسومات والكميات وبيئة التشغيل ومتطلبات التشطيب.',
  'Engineer': 'الهندسة',
  'We review manufacturability and develop the production-ready design.': 'نراجع قابلية التصنيع ونطوّر التصميم الجاهز للإنتاج.',
  'Manufacture': 'التصنيع',
  'Your approved enclosure moves through fabrication and powder coating.': 'تنتقل الخزانة المعتمدة عبر مراحل التصنيع والطلاء بالمسحوق.',
  'Verify': 'التحقق',
  'Final inspection confirms quality before the order is released.': 'يؤكد الفحص النهائي الجودة قبل اعتماد الطلب للتسليم.',
  'Built without compromise.': 'صناعة بلا مساومة.',
  'Engineered to outlast the environment.': 'هندسة تتفوق على تحديات البيئة.',
  'In critical industrial, power, and marine applications, low-cost enclosures lead to high-cost failures. Here is how our investment in uncompromising quality protects your projects, budgets, and long-term reputation.': 'في التطبيقات الصناعية وتطبيقات الطاقة والتطبيقات البحرية الحرجة، تؤدي الخزائن منخفضة التكلفة إلى أعطال باهظة الثمن. هكذا يحمي استثمارنا في الجودة دون مساومة مشاريعكم وميزانياتكم وسمعتكم على المدى الطويل.',
  'EU-Procured Raw Materials': 'مواد خام مورّدة من أوروبا',
  'We source high-grade sheet metal exclusively from certified European mills. Unlike lower-tier alternatives, our raw material guarantees consistent tensile strength, superior structural integrity, and uniform thickness across every panel, preventing warping and structural fatigue under stress.': 'نورد الصفائح المعدنية عالية الجودة حصرياً من مصانع أوروبية معتمدة. وعلى خلاف البدائل الأقل جودة، تضمن موادنا الخام ثبات مقاومة الشد وسلامة هيكلية فائقة وسماكة موحدة في كل لوحة، مما يمنع الالتواء والإجهاد الهيكلي تحت الضغط.',
  'High-Precision CNC Fabrication': 'تصنيع CNC عالي الدقة',
  'Utilizing state-of-the-art CNC punching, laser cutting, and bending machinery, we achieve micron-level precision. This eliminates on-site alignment issues, guarantees absolute repeatability across hundreds of units, and delivers a clean, seamless assembly finish.': 'باستخدام أحدث معدات التثقيب والقطع بالليزر والثني بنظام CNC، نحقق دقة بمستوى الميكرون. وهذا يلغي مشكلات المحاذاة في الموقع ويضمن قابلية التكرار التام عبر مئات الوحدات ويوفر تشطيب تجميع نظيفاً ومتكاملاً.',
  'Advanced Engineering Design': 'تصميم هندسي متقدم',
  'Backed by seasoned industrial designers using cutting-edge CAD software, every enclosure is optimized for load management, thermal dissipation, and complex integration requirements before it ever touches the production floor.': 'بخبرة مصممين صناعيين متمرسين يستخدمون أحدث برامج CAD، يتم تحسين كل خزانة لإدارة الأحمال وتبديد الحرارة ومتطلبات التكامل المعقدة قبل وصولها إلى أرضية الإنتاج.',
  'Rigorous Component Sourcing': 'اختيار صارم للمكونات',
  'Every component going inside our enclosures—from heavy-duty locks, hinges, and continuous polyurethane (PU) poured foam gaskets to internal mounting elements—is sourced from tier-one global suppliers to guarantee maximum operational service life.': 'يتم توريد كل مكون داخل خزائننا، من الأقفال والمفصلات شديدة التحمل وحشوات رغوة البولي يوريثان المصبوبة باستمرار إلى عناصر التثبيت الداخلية، من موردين عالميين من الفئة الأولى لضمان أقصى عمر تشغيلي.',
  '7-Stage Surface Treatment & Coating': 'معالجة وطلاء للأسطح من 7 مراحل',
  'Protection starts deep. Our meticulous 7-stage chemical pre-treatment and electrostatic powder coating process provides exceptional corrosion resistance, UV stability, and salt-spray endurance built specifically to withstand extreme GCC environmental conditions.': 'تبدأ الحماية من العمق. توفر عملية المعالجة الكيميائية المسبقة الدقيقة من 7 مراحل والطلاء الكهروستاتيكي بالمسحوق مقاومة استثنائية للتآكل وثباتاً أمام الأشعة فوق البنفسجية وتحمل رذاذ الملح، وهي مصممة خصيصاً لمواجهة الظروف البيئية القاسية في دول مجلس التعاون الخليجي.',
  'The Metalys Promise': 'وعد ميتاليس',
  'Zero-Failure Philosophy': 'فلسفة انعدام الأعطال',
  'While initial material savings from cheaper local or imported vendors look attractive on paper, they result in premature rust, site rework, failing compliance audits, and compromised safety. We engineer enclosures designed to perform reliably for decades—protecting your valuable switchgear and minimizing total cost of ownership.': 'قد تبدو الوفورات الأولية في المواد من الموردين المحليين أو المستوردين الأقل سعراً جذابة على الورق، لكنها تؤدي إلى الصدأ المبكر وإعادة العمل في الموقع وعدم اجتياز تدقيقات الامتثال والإخلال بالسلامة. نحن نهندس خزائن مصممة للعمل بموثوقية لعقود، لحماية لوحات التوزيع القيّمة وتقليل التكلفة الإجمالية للملكية.',
  'Standards & certification': 'المعايير والشهادات',
  'Built on verified': 'نلتزم بمعايير',
  'standards.': 'موثوقة.',
  'Our management systems and operating practices support consistent quality, environmental responsibility, occupational health and safety, and local value creation.': 'تدعم أنظمة الإدارة وممارسات التشغيل لدينا ثبات الجودة والمسؤولية البيئية والصحة والسلامة المهنية وتعزيز القيمة المحلية.',
  'Quality Management': 'إدارة الجودة',
  'Environmental Management': 'الإدارة البيئية',
  'Occupational Health & Safety': 'الصحة والسلامة المهنية',
  'Compliant': 'متوافق',
  'In-Country Value': 'القيمة المحلية',
  'ICV Certified': 'معتمد للقيمة المحلية',
  'Value': 'القيمة',
  'Company profile.': 'الملف التعريفي للشركة.',
  'Company': 'الشركة',
  'Metalys Enclosures Manufacturing W.L.L.': 'ميتاليس لصناعة الخزائن ذ.م.م.',
  'Explore our company, capabilities, products, and manufacturing approach.': 'تعرّف على شركتنا وقدراتنا ومنتجاتنا ومنهجية التصنيع لدينا.',
  'Download profile': 'تنزيل الملف التعريفي',
  'Ready for production?': 'هل أنت جاهز للإنتاج؟',
  'Bring us the': 'شاركنا',
  'hard specification.': 'المواصفات المعقدة.',
  'Send your drawings and requirements. Our team will review the brief and respond with the next practical step.': 'أرسل رسوماتك ومتطلباتك. سيراجع فريقنا التفاصيل ويتواصل معك بالخطوة العملية التالية.',
  'Metalys Headquarters': 'المقر الرئيسي لميتاليس',
  'Doha, Qatar': 'الدوحة، قطر',
  'Street 653, Zone 57, Building No. 46': 'شارع 653، منطقة 57، مبنى 46',
  'Industrial Area, Doha': 'المنطقة الصناعية، الدوحة',
  'State of Qatar, PIN 11290': 'دولة قطر، الرمز 11290',
  'Regional Office': 'مكتب إقليمي',
  'United Arab Emirates': 'الإمارات العربية المتحدة',
  'Serving customers and projects across the UAE.': 'نخدم العملاء والمشاريع في جميع أنحاء دولة الإمارات.',
  'Saudi Arabia': 'المملكة العربية السعودية',
  'Supporting industrial projects across the Kingdom.': 'ندعم المشاريع الصناعية في جميع أنحاء المملكة.',
  'Contact Us': 'اتصل بنا',
  'Precision in quality. Efficiency in lead time. Excellence in service.': 'دقة في الجودة. كفاءة في زمن الإنجاز. تميز في الخدمة.',
  'Hero photo: MTA Capital Construction / CC BY 2.0': 'صورة الواجهة: MTA Capital Construction / CC BY 2.0',
  'Tell us what': 'أخبرنا بما',
  'you need built.': 'تحتاج إلى تصنيعه.',
  'Name': 'الاسم',
  'Work email': 'البريد الإلكتروني للعمل',
  'Project requirements': 'متطلبات المشروع',
  'Prepare enquiry': 'إعداد الاستفسار'
};

const originalTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  const key = node.nodeValue.trim();
  if (arabicTranslations[key]) originalTextNodes.push({ node, original: node.nodeValue, key });
}

const languageAttributes = [
  [document.querySelector('.skip-link'), 'aria-label', 'Skip to content', 'تخطي إلى المحتوى'],
  [document.querySelector('.brand'), 'aria-label', 'Metalys home', 'الصفحة الرئيسية لميتاليس'],
  [menuButton, 'aria-label', 'Open menu', 'فتح القائمة'],
  [nav, 'aria-label', 'Primary navigation', 'التنقل الرئيسي'],
  [document.querySelector('.language-switch'), 'aria-label', 'Language', 'اللغة'],
  [document.querySelector('.hero-image'), 'alt', 'Technician testing industrial switchgear in a power distribution room', 'فني يختبر لوحات توزيع صناعية في غرفة توزيع الطاقة'],
  [document.querySelector('.hero-specs'), 'aria-label', 'Key capabilities', 'القدرات الرئيسية'],
  [document.querySelector('.icv-card img'), 'alt', 'Tawteen and QatarEnergy', 'توطين وقطر للطاقة'],
  [document.querySelector('[data-close-quote]'), 'aria-label', 'Close quote form', 'إغلاق نموذج عرض السعر'],
  [document.querySelector('textarea[name="requirements"]'), 'placeholder', 'Material, dimensions, quantity, finish...', 'المادة، الأبعاد، الكمية، التشطيب...']
];

const setLanguage = (language) => {
  const isArabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic ? 'ميتاليس | تصنيع الخزائن المعدنية الدقيقة' : 'Metalys | Precision Enclosure Manufacturing';
  document.querySelector('meta[name="description"]').content = isArabic
    ? 'تصمم ميتاليس وتصنع خزائن الصفائح المعدنية الدقيقة بسرعة إنجاز ورقابة جودة صارمة.'
    : 'Metalys designs and manufactures precision sheet metal enclosures with fast turnaround and rigorous quality control.';

  originalTextNodes.forEach(({ node, original, key }) => {
    node.nodeValue = isArabic ? original.replace(key, arabicTranslations[key]) : original;
  });
  languageAttributes.forEach(([element, attribute, english, arabic]) => {
    if (element) element.setAttribute(attribute, isArabic ? arabic : english);
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  localStorage.setItem('metalys-language', language);
};

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem('metalys-language') || 'en');

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('[data-capability]').forEach((item) => {
  item.querySelector('button').addEventListener('click', () => {
    const wasActive = item.classList.contains('is-active');

    document.querySelectorAll('[data-capability]').forEach((capability) => {
      capability.classList.remove('is-active');
      capability.querySelector('button').setAttribute('aria-expanded', 'false');
      capability.querySelector('.capability-toggle').textContent = '+';
    });

    if (!wasActive) {
      item.classList.add('is-active');
      item.querySelector('button').setAttribute('aria-expanded', 'true');
      item.querySelector('.capability-toggle').textContent = '−';
    }
  });
});

document.querySelectorAll('[data-open-quote]').forEach((button) => {
  button.addEventListener('click', () => dialog.showModal());
});

document.querySelector('[data-close-quote]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('[data-quote-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const isArabic = document.documentElement.lang === 'ar';
  const subject = isArabic
    ? `استفسار عن الخزائن من ${data.get('company') || data.get('name')}`
    : `Enclosure enquiry from ${data.get('company') || data.get('name')}`;
  const body = isArabic
    ? `الاسم: ${data.get('name')}\nالبريد الإلكتروني: ${data.get('email')}\nالشركة: ${data.get('company') || 'غير مذكور'}\n\nمتطلبات المشروع:\n${data.get('requirements')}`
    : `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\n\nProject requirements:\n${data.get('requirements')}`;
  window.location.href = `mailto:adithya.krishnan@metalys.qa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();