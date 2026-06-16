export interface Service {
  slug: string;
  title: string;
  image: string;
  category: "toplama-ayirma" | "geri-kazanim";
  content: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  content: string;
}

export interface Reference {
  name: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  alt: string;
}

export interface VideoItem {
  title: string;
  youtubeUrl: string;
  thumbnail: string;
}

export const siteConfig = {
  name: "Kapadokya Cam",
  fullName: "KAPADOKYA CAM GERİ DÖNÜŞÜM VE İNŞAAT SANAYİ LİMİTED ŞİRKETİ",
  domain: "kapadokyacam.com.tr",
  description:
    "Türkiye Cumhuriyeti gümrük müdürlüklerinin, depo ve antrepo hizmeti veren kuruluşlarının atık ürünlerinin imha ve geri kazanım işlemleri.",
  phone1: "+90 212 771 27 27",
  phone1Raw: "+902127712727",
  phone2: "+90 530 547 27 22",
  phone2Raw: "+905305472722",
  email1: "info@kapadokyacam.com.tr",
  email2: "cevre@kapadokyacam.com.tr",
  address: "Ömerli Mahallesi Efekan Caddesi No:12/1 Arnavutköy - İstanbul",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.79327606485!2d28.872096507201327!3d41.00549580936355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1565429192059!5m2!1str!2str",
  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
  navItems: [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: "Galeri", href: "/galeri" },
    { label: "Referanslarımız", href: "/referanslarimiz" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ],
  pdfs: [
    {
      label: "Tehlikesiz Atık Toplama Ayırma Lisansımız",
      url: "/yuklemeler/pdf/tat-kapadokya_2.pdf",
    },
    {
      label: "Tehlikesiz Atık Geri Kazanım ve Ambalaj Atığı Toplama Ayırma Lisansımız",
      url: "/yuklemeler/pdf/kapadokya-cam-yeni-gfb-15-08-2020_4.pdf",
    },
  ],
  reCaptchaSiteKey: "6Lee77kbAAAAAG0vZJxhlDw5kl8s9vVFH1SBp1pc",
  formAction: "https://www.kapadokyacam.com.tr/iletisim-form",
};

export const services: Service[] = [
  {
    slug: "kagit-karton-ambalaj-atiklari",
    title: "Kağıt-Karton Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/kagit-atiklar.jpg",
    category: "toplama-ayirma",
    content: `<p>Kağıt ve karton ambalaj atıkları, geri dönüşüm sürecinde önemli bir yer tutar. Tesisimizde toplanan kağıt ve karton atıklar, ayrıştırma işleminden geçirilerek preslenir ve geri dönüşüm tesislerine gönderilir.</p>
<p>Kağıt geri dönüşümü sayesinde:</p>
<ul>
<li>Ağaç kesimi azalır</li>
<li>Enerji tasarrufu sağlanır</li>
<li>Hava kirliliği %74-94 azalır</li>
<li>Su kirliliği %35 azalır</li>
<li>Su kullanımı %45 azalır</li>
</ul>`,
  },
  {
    slug: "plastik-atiklari",
    title: "Plastik Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/plastik.jpg",
    category: "toplama-ayirma",
    content: `<p>Plastik ambalaj atıkları, doğada çözünmesi en uzun süren atık türlerinden biridir. Tesisimizde plastik atıklar türlerine göre ayrıştırılmakta, preslenmekte ve geri dönüşüm tesislerine gönderilmektedir.</p>
<p>Plastik geri dönüşümünün faydaları:</p>
<ul>
<li>Doğal kaynakların korunması</li>
<li>Enerji tasarrufu</li>
<li>Çevre kirliliğinin azaltılması</li>
<li>Sera gazı emisyonlarının düşürülmesi</li>
</ul>`,
  },
  {
    slug: "cam-ambalaj-atiklari",
    title: "Cam Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/cam-ambalaj.jpg",
    category: "toplama-ayirma",
    content: `<p>Cam ambalaj atıkları, %100 geri dönüştürülebilir malzemelerdir. Cam atıklarının geri dönüşümü ile hem enerji tasarrufu sağlanmakta hem de doğal kaynaklar korunmaktadır.</p>
<p>Cam geri dönüşümünün avantajları:</p>
<ul>
<li>Sonsuz kez geri dönüştürülebilir</li>
<li>Kalite kaybı olmaz</li>
<li>Yüksek enerji tasarrufu</li>
<li>Hammadde kullanımını azaltır</li>
</ul>`,
  },
  {
    slug: "metalik-ambalaj-atiklari",
    title: "Metalik Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/aluminyum-ambalaj-atik.jpg",
    category: "toplama-ayirma",
    content: `<p>Metalik ambalaj atıkları, alüminyum ve çelik gibi değerli metallerden oluşur. Bu atıkların geri dönüşümü, yeni maden çıkarma ihtiyacını azaltır.</p>
<p>Metal geri dönüşümünün faydaları:</p>
<ul>
<li>%95'e varan enerji tasarrufu</li>
<li>Doğal kaynakların korunması</li>
<li>Maden atıklarının azaltılması</li>
<li>Ekonomik değer yaratma</li>
</ul>`,
  },
  {
    slug: "ahsap-ambalaj-atiklari",
    title: "Ahşap Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/ahsap.jpg",
    category: "toplama-ayirma",
    content: `<p>Ahşap ambalaj atıkları, paletler ve ahşap kasalar gibi malzemelerden oluşur. Bu atıklar uygun şekilde işlenerek tekrar kullanıma kazandırılır.</p>
<p>Ahşap atık geri dönüşümünün avantajları:</p>
<ul>
<li>Ağaç kesiminin azaltılması</li>
<li>Enerji geri kazanımı</li>
<li>Atık hacminin azaltılması</li>
<li>Ekonomik fayda</li>
</ul>`,
  },
  {
    slug: "tekstil-ambalaj-atiklari",
    title: "Tekstil Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/a1185-tekstil-ambalaj-atiklari-15-01-09.jpg",
    category: "toplama-ayirma",
    content: `<p>Tekstil ambalaj atıkları, tekstil sektöründen çıkan ambalaj malzemelerini kapsar. Bu atıklar ayrıştırılarak uygun geri dönüşüm süreçlerine yönlendirilir.</p>`,
  },
  {
    slug: "karisik-ambalaj-atiklari",
    title: "Karışık Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/karisik.jpg",
    category: "toplama-ayirma",
    content: `<p>Karışık ambalaj atıkları, farklı türdeki ambalaj malzemelerinin bir arada bulunduğu atıklardır. Tesisimizde bu atıklar titizlikle ayrıştırılmaktadır.</p>`,
  },
  {
    slug: "kompozit-ambalaj-atiklari",
    title: "Kompozit Ambalaj Atıkları",
    image: "/yuklemeler/hizmet/default/kompozit.png",
    category: "toplama-ayirma",
    content: `<p>Kompozit ambalaj atıkları, birden fazla malzemenin bir arada kullanıldığı ambalajlardır. Özel ayrıştırma yöntemleri ile geri dönüşüme kazandırılır.</p>`,
  },
  {
    slug: "imha-ve-tasfiye-edilecek-urunler",
    title: "İmha ve Tasfiye Edilecek Ürünler",
    image: "/yuklemeler/hizmet/default/geri-donusum.jpg",
    category: "geri-kazanim",
    content: `<p>Türkiye Cumhuriyeti Gümrük Müdürlüklerinin depo ve antrepo hizmeti veren kuruluşların raf ömrü sınırlı veya tarihi geçmiş, dış ambalajı hatalı olan, tüketime ve işlemeye uygun olmayan ürünlerin imha ve geri kazanım işlemlerini gerçekleştirmekteyiz.</p>
<p>Aynı zamanda çeşitli sektörlerde hizmet veren uluslararası markaların (Versace, Chanel, Pernod Ricard, Adidas, New Balance... vs.) piyasaya sürülmeden yakalanan sahte ürünlerinin imhasını da yapmaktayız.</p>`,
  },
  {
    slug: "organik-ve-anorganik-atiklar",
    title: "Organik ve Anorganik Atıklar",
    image: "/yuklemeler/hizmet/default/organik-2.jpg",
    category: "geri-kazanim",
    content: `<p>Organik ve anorganik atıkların toplanması, ayrıştırılması ve geri kazanımı konusunda profesyonel hizmet vermekteyiz.</p>`,
  },
  {
    slug: "duz-ve-lamine-cam-atiklari",
    title: "Düz ve Lamine Cam Atıkları",
    image: "/yuklemeler/hizmet/default/duz-cam.png",
    category: "geri-kazanim",
    content: `<p>Düz ve lamine cam atıkları, inşaat ve otomotiv sektörlerinden çıkan özel cam türleridir. Bu atıklar özel işlemlerle geri dönüşüme kazandırılmaktadır.</p>`,
  },
  {
    slug: "tekstil-atiklari",
    title: "Tekstil Atıkları",
    image: "/yuklemeler/hizmet/default/tekstil-geri-donusumu.jpg",
    category: "geri-kazanim",
    content: `<p>Tekstil atıkları, geri dönüşüm sürecinde önemli bir yer tutar. Tesisimizde tekstil atıkları toplanmakta, ayrıştırılmakta ve geri dönüşüm tesislerine gönderilmektedir.</p>`,
  },
  {
    slug: "tuketime-veya-islemeye-uygun-olmayan-maddeler",
    title: "Tüketime veya İşlemeye Uygun Olmayan Maddeler",
    image: "/yuklemeler/hizmet/default/cam-atiklari_1.jpg",
    category: "geri-kazanim",
    content: `<p>Tüketime veya işlemeye uygun olmayan maddelerin toplanması, imha edilmesi ve geri kazanımı konusunda deneyimli ekibimizle hizmet vermekteyiz.</p>
<p>Üretim yapan sanayi kuruluşlarının imalat hatası, beklemeden kaynaklı raf ömrünü tamamlamış ve piyasaya sürülüp tarihi geçmesinden ötürü iade edilen ürünlerinin imhasını yapmaktayız.</p>`,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "her-gun-27-000-agac-tuvalet-kagidi-uretmek-icin-kesiliyor-1571210028",
    title: "Her gün 27,000 ağaç tuvalet kağıdı üretmek için kesiliyor.",
    image: "/yuklemeler/blog/default/agac-blog.jpg",
    content: `<p>Dünya genelinde her gün yaklaşık 27,000 ağaç sadece tuvalet kağıdı üretimi için kesiliyor. Bu rakam, geri dönüşümün ne kadar önemli olduğunu bir kez daha gözler önüne seriyor.</p>
<p>Geri dönüştürülmüş kağıt kullanarak bu ağaçların kesilmesini önleyebilir, ormanlarımızı koruyabiliriz. 1 ton kağıdın geri dönüştürülmesi ile yaklaşık 17 ağaç kurtarılmaktadır.</p>
<p>Kapadokya Cam olarak, kağıt ve karton atıklarının geri dönüşümüne büyük önem veriyoruz. Tesisimizde toplanan kağıt atıkları, geri dönüşüm sürecinden geçirilerek tekrar ekonomiye kazandırılmaktadır.</p>`,
  },
  {
    slug: "her-gun-27-000-agac-tuvalet-kagidi-uretmek-icin-kesiliyor-1571209470",
    title: "1 ton kağıdı geri dönüştürmek;",
    image: "/yuklemeler/blog/default/kagitttttt.jpg",
    content: `<p>1 ton kağıdı geri dönüştürmek, birçok çevresel fayda sağlar:</p>
<ul>
<li>17 ağacın kesilmesini önler</li>
<li>4.100 kWh enerji tasarrufu sağlar</li>
<li>26.500 litre su tasarrufu sağlar</li>
<li>2.5 varil petrol tasarrufu sağlar</li>
<li>Hava kirliliğini %74-94 oranında azaltır</li>
</ul>
<p>Bu rakamlar, geri dönüşümün sadece çevresel değil aynı zamanda ekonomik faydalarını da göstermektedir.</p>`,
  },
  {
    slug: "her-gun-27-000-agac-tuvalet-kagidi-uretmek-icin-kesiliyor-1571209466",
    title: "Tek bir plastik şişeyi geri dönüştürmek",
    image: "/yuklemeler/blog/default/plastik-blog.jpg",
    content: `<p>Tek bir plastik şişeyi geri dönüştürmek, 60 watt'lık bir ampulü 6 saat çalıştıracak kadar enerji tasarrufu sağlar.</p>
<p>Plastik atıklar doğada yaklaşık 1000 yılda çözünmektedir. Bu nedenle plastik atıkların geri dönüşümü hayati önem taşımaktadır.</p>
<p>Kapadokya Cam olarak, plastik atıkların toplanması ve geri dönüşüm sürecine kazandırılması konusunda aktif bir rol oynamaktayız.</p>`,
  },
  {
    slug: "her-gun-27-000-agac-tuvalet-kagidi-uretmek-icin-kesiliyor",
    title: "Her yıl okyanuslara 6 milyar kg çöp atılıyor. Çoğu da plastik.",
    image: "/yuklemeler/blog/default/okyanus-blog.jpg",
    content: `<p>Her yıl okyanuslara yaklaşık 6 milyar kilogram çöp atılmaktadır ve bunun büyük çoğunluğunu plastik atıklar oluşturmaktadır.</p>
<p>Bu durum deniz canlılarının yaşamını tehdit etmekte ve ekosistemi bozmaktadır. Geri dönüşüm, okyanus kirliliğini azaltmanın en etkili yollarından biridir.</p>
<p>Atıklarımızı doğru şekilde ayrıştırarak ve geri dönüşüme kazandırarak okyanuslarımızı koruyabiliriz.</p>`,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    image: "/yuklemeler/urun-gorselleri/default/whatsapp-image-2019-10-21-at-15-04-48.jpeg",
    alt: "Gönderime Hazır Kağıt-Karton Ambalaj",
  },
  {
    image: "/yuklemeler/urun-gorselleri/default/whatsapp-image-2019-11-02-at-15-35-26.jpeg",
    alt: "Preslenmiş Metalik Ambalajlar",
  },
];

export const references: Reference[] = [
  {
    name: "Çekmeköy",
    image: "/yuklemeler/logolar/cekmekoy.png",
  },
  {
    name: "Maltepe Belediyesi",
    image: "/yuklemeler/logolar/maltepe-belediyesi-logo-4b473be402-seeklogo-com.png",
  },
  {
    name: "Gümrük",
    image: "/yuklemeler/logolar/gumruk.jpg",
  },
  {
    name: "Doğuş",
    image: "/yuklemeler/logolar/dogus.jpg",
  },
];

export const videos: VideoItem[] = [
  {
    title: "Plastik Geri Kazanımı",
    youtubeUrl: "https://www.youtube.com/watch?v=Xd3EbmOaow4",
    thumbnail: "/yuklemeler/video-gorselleri/default/maxresdefault.jpg",
  },
  {
    title: "Kullanıma Uygun Olmayan Ürünlerin Geri Kazanımı",
    youtubeUrl: "https://www.youtube.com/watch?v=jpLUciCtnms",
    thumbnail: "/yuklemeler/video-gorselleri/default/hqdefault-2.jpg",
  },
  {
    title: "Tekstil Atıkları Geri Kazanımı 1",
    youtubeUrl: "https://www.youtube.com/watch?v=8hkCluMqomI",
    thumbnail: "/yuklemeler/video-gorselleri/default/hqdefault-1.jpg",
  },
  {
    title: "Tekstil Atıkları Geri Kazanımı",
    youtubeUrl: "https://www.youtube.com/watch?v=EaAm7_Ypzd4",
    thumbnail: "/yuklemeler/video-gorselleri/default/hqdefault.jpg",
  },
];

export const aboutContent = `<p><strong>Geri Dönüşüm Nedir?</strong></p>
<p>İnsanoğlu tarafından tüketilen atıklardan, değerlendirilebilen atıklar çeşitli fiziksel veya kimyasal işlemlerle ikincil hammaddeye dönüştürülerek tekrar üretim sürecine dâhil edilmesine geri dönüşüm denir. İkinci bir tanım olarak ta geri dönüşüm terimini, kullanım dışı kalan geri dönüştürülebilir atık malzemelerin çeşitli geri dönüşüm yöntemleri ile hammadde olarak tekrar imalat süreçlerine kazandırılması olarak açıklayabiliriz.</p>
<p><strong>Geri Dönüşümün Yararları Nelerdir?</strong></p>
<p>Tükettiğimiz maddeleri yeniden dönüşüm halkası içine katabildiğimiz zaman öncelikle bunların tekrar ham madde olarak kullanılmasını sağlamış oluruz. Böylece insan nüfusunun artışı ile paralel olarak artan tüketimin doğal dengeyi bozması doğadan aldıklarımızı tekrar doğaya vererek azda olsa engellenmiş olur. Bununla birlikte yeniden dönüştürülebilen maddelerin tekrar ham madde olarak kullanılması büyük miktarda enerji tasarrufunu mümkün kılar. Bir örnek vermek gerekirse yeniden kazanılabilir alüminyumun kullanılması alüminyumun sıfırdan imal edilmesine oranla %35'e varan enerji tasarrufu sağlamaktadır.</p>
<p>Çöpteki nesneleri ham madde olarak kullandığımız vakit çevre kirliliğinin her geçen gün artmasını da önleyebiliriz. Hurda kağıdı tekrar kağıt imalatında kullandığımızda hava kirliliğini %74-94, su kirliliğini %35, su kullanımını %45 azaltıyoruz. Çevremize-doğaya, ülke ekonomisine ve de kendimize olan sorumluluğumuzdan dolayı günümüzde hepimizin yeniden dönüşüm projesi içinde yer alması gerekmektedir.</p>
<p><strong>Çevre Politikamız</strong></p>
<p>İnsan sağlığı, teknik emniyet ve çevresel açıdan ön planda tutulmaktadır. Bu nedenle insan ve çevre sağlığı ilk önceliklerimiz arasında yer akmaktadır. Faaliyet olarak çevresel kirliliği önlediğimiz için, insan ve çevre sağlığına katkımız büyüktür.</p>
<p>Amacımız; Çevre ve iş sağlığı açısından tüm risklere karşı tedbirlerin alınmasını, emniyet ve çevre koruma ile ilgili acil durumlara müdahaleye hazırlıklı olmak gibi hususlar da dâhil olmak üzere tüm personelin Sağlık, Emniyet, Çevre ve Kalite Yönetim bilinçlerinin eğitimlerle sürekli geliştirilmesini, Atık temininden üretim ve bertaraf sürecine dek çevreye zarar vermekten kaçınmayı, tüm faaliyetler esnasında yaralanma ve hayat kaybının önlenmesini, temiz çalışma ortamının sağlanmasını ve doğal kaynakların verimli kullanılmasını (elektrik, su, doğalgaz, akaryakıt vb.), sıfır kirlilik prensibiyle çalışmayı sağlamaktır.</p>
<p>Şirketlerimizde tüm çalışmalarımız; insan sağlığı, teknik emniyet ve çevre faktörünün ön planda tutulmasıyla ve bu prensipler doğrultusunda sürdürülebilir çözümler ile yürütülmektedir</p>
<p><strong>Toplama Ayırma Lisansı ile yaptıklarımız;</strong></p>
<p>Tesise gelen tehlikesiz atıklar ve ambalaj atıkları şu şekildedir:</p>
<ol>
<li>Plastikler</li>
<li>Kâğıt, karton</li>
<li>Kablo, pvc,</li>
<li>Ahşap palet ve plastik paletler.</li>
</ol>
<p>Tehlikesiz atık üreticileri tarafından oluşturulan tehlikesiz atıklar oluştuğu noktalardan konteyner sistemi ile veya yerinde alım ile araçlarımızla alınarak, toplama-ayırma belgeli tesisimize getirilir, atıklar cinslerine göre ayrıştırıldıktan sonra presleme gibi fiziki işlemlerden geçerek üretime hazır yarı mamül haline getirilerek lisanslı geri dönüşüm firmalarına yada yarı mamul kullanımına uygun üretim fabrikalarına gönderilir.</p>
<p><strong>Aynı zamanda iştirakimiz olan fabrikalara, Atık Yönetim Danışmanlığı</strong></p>
<p>Atık Yönetimi Genel Esaslarına İlişkin Yönetmelik ve 29/4/2009 tarihli ve 27214 sayılı Resmî Gazete'de yayımlanan Çevre Kanununca Alınması Gereken İzin ve Lisanslar Hakkında Yönetmelik esaslarına dayanılarak hazırlanmıştır.</p>
<p>Mevzuata göre;</p>
<p>Tehlikesiz ve inert atıkların çevreye olabilecek olumsuz etkilerinin en aza indirilmesi,</p>
<p>Atık miktarının azaltılması, geçici depolanması, geri kazanım tesislerinin kurulması ve bu tesislerin çevreyle uyumlu yönetiminin sağlanması ve atık üreticilerinden mevzuata uygun atıklar alınarak geri kazandırılması esastır.</p>
<p>Türkiye'nin atık üreticilerine uzman kadromuz ile atık yönetimi konularında danışmanlık hizmeti verilmektedir.</p>`;

export const cookieConsent = {
  text: "Web sitemizdeki çerezleri (cookie), hizmetlerimizi nasıl kullandığınızı analiz ederek, kullanıcı deneyimini iyileştirmek ve reklam/iletişim faaliyetleri için kullanıyoruz. Daha fazla bilgi için",
  link: "/cerez-politikasi",
  linkText: "Çerez Politikası",
  acceptText: "Tamam",
};
