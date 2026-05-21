import { Link } from 'react-router-dom'

export default function Hakkimizda() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary-dark)' }}>
        Kurumsal Kimliğimiz
      </h1>
      <h2 className="text-xl font-semibold mb-8" style={{ color: 'var(--color-primary)' }}>
        Hakkımızda
      </h2>

      {/* Ana Metin + Fotoğraf */}
      <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col md:flex-row gap-10 mb-8">
        <div className="flex-1 flex flex-col gap-4 text-gray-600 leading-relaxed">
          <p>S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi, Kocayayla Köyü'nde tarım ve hayvancılıkla uğraşan üreticilerin ekonomik ve sosyal olarak güçlenmesini sağlamak amacıyla kurulmuştur. Kooperatifimiz, ortaklarımızın üretim faaliyetlerini desteklemek, maliyetlerini azaltmak ve sürdürülebilir bir üretim yapısı oluşturmak hedefiyle faaliyetlerini sürdürmektedir.</p>
          <p>Kooperatifimiz, 2004 yılında 7 üreticimizin bir araya gelmesiyle kurulmuştur. Kuruluşumuzda emeği geçen kurucu ortaklarımız; Hüsrev Damar, Hasan Ünlü, Osman Özmen, Reyhan Uysal, İbrahim Öz, Yakup Alkan ve Metin Kızıltepe'dir.</p>
          <p>Kuruluşumuzdan bu yana, dayanışma ve ortaklık anlayışıyla hareket ederek üyelerimizin ihtiyaçlarını karşılamaya yönelik hizmetler sunmaktayız. Süt toplama ve soğutma, yem ve un temini, tarımsal makine hizmetleri gibi alanlarda sağladığımız desteklerle üreticilerimizin yanında olmaya devam ediyoruz.</p>
          <p>Kooperatifimizde 2004 yılından bu yana görev yapan başkanlarımız sırasıyla Hasan Ünlü, Metin Kızıltepe, Vayit Tüzgen (Merhum), Osman Deniz, Ömer Zözer ve İsa Özmen olmuştur. Bugüne kadar görev alan tüm başkanlarımıza ve yöneticilerimize kooperatifimize sundukları katkılardan dolayı teşekkür ediyor, merhum başkanımızı rahmetle anıyoruz.</p>
          <p>Kooperatifimiz, yerel üretimi destekleyen, güvenilir ve şeffaf bir yönetim anlayışını benimsemektedir. Ortaklarımızın emeğinin değer bulması, üretimin sürdürülebilir hale gelmesi ve kırsal kalkınmaya katkı sağlanması temel önceliklerimiz arasındadır. Bugün olduğu gibi gelecekte de, üyelerimizle birlikte büyüyen, gelişen ve bölge ekonomisine katkı sunan bir kooperatif olma hedefiyle çalışmalarımızı sürdürmekteyiz.</p>
        </div>
        <div className="flex-shrink-0">
          <img src="/galeri/ekibimiz.jpeg" alt="Ekibimiz" className="w-72 rounded-2xl object-cover" />
        </div>
      </div>

      {/* Misyon / Vizyon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          { baslik: 'Misyonumuz', icerik: "Köylümüzün ürettiği ürünlerin katma değerini artırmak, üreticilerimize eğitim ve teknik destek sağlamak, doğal ve sağlıklı üretimi teşvik ederek Kocayayla'nın tarımsal potansiyelini en üst seviyeye taşımak." },
          { baslik: 'Vizyonumuz', icerik: "Kocayayla'yı bölgesinin öncü tarımsal üretim merkezlerinden biri haline getirmek ve güvenilir, kaliteli üretim anlayışıyla Türkiye'de örnek gösterilen bir kooperatif olmak." },
        ].map((item) => (
          <div key={item.baslik} className="bg-white rounded-2xl shadow-sm p-6 border-t-4" style={{ borderColor: 'var(--color-primary)' }}>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-primary-dark)' }}>{item.baslik}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.icerik}</p>
          </div>
        ))}
      </div>

      {/* Değerlerimiz */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--color-primary-dark)' }}>Değerlerimiz</h3>
        <p className="text-gray-500 text-sm mb-4">Tüm çalışmalarımızı, ortaklarımız ve köyümüz için benimsediğimiz temel değerler üzerine inşa ediyoruz:</p>
        <div className="flex flex-wrap gap-2">
          {['Dürüstlük', 'Dayanışma', 'Sürdürülebilirlik', 'Şeffaflık', 'Güvenilirlik', 'Toplumsal Fayda'].map((d) => (
            <span key={d} className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Kooperatifin Yolculuğu */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--color-primary-dark)' }}>Kooperatifimizin Yolculuğu</h3>
        <div className="flex flex-col gap-6 border-l-2 pl-6" style={{ borderColor: 'var(--color-primary)' }}>
          {[
            { baslik: 'Kuruluş', icerik: 'Köy üreticilerimizin bir araya gelmesiyle kooperatifimiz resmi olarak kuruldu ve ilk ortaklarımızla faaliyetlerimize başladık.' },
            { baslik: 'Üretimde Birliktelik', icerik: 'Ortak alım, ortak planlama ve toplu üretim modelleriyle maliyetlerimizi düşürüp ürünlerimizin kalitesini artırdık.' },
            { baslik: 'Pazar Ağının Geliştirilmesi', icerik: 'Ürünlerimizin daha geniş kitlelere ulaşması için yeni pazar kanalları, iş birlikleri ve tanıtım çalışmaları yürütmeye başladık.' },
          ].map((adim) => (
            <div key={adim.baslik} className="relative">
              <div className="absolute -left-8 w-3 h-3 rounded-full mt-1" style={{ backgroundColor: 'var(--color-primary)' }} />
              <h4 className="font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>{adim.baslik}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{adim.icerik}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Faaliyet Alanları */}
      <div className="mb-8">
        <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--color-primary-dark)' }}>Faaliyet Alanlarımız</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { baslik: 'Ortak Üretim ve Planlama', icerik: 'Kooperatif çatısı altında üretim planlaması yaparak hem verimi artırıyor hem de ürün sürekliliğini sağlıyoruz.' },
            { baslik: 'Eğitim ve Danışmanlık', icerik: 'Üreticilerimiz için tarımsal teknikler, verimlilik, kooperatifçilik ve pazarlama gibi konularda bilgilendirme çalışmaları yürütüyoruz.' },
            { baslik: 'Girdi Temini ve Destek', icerik: 'Yem, yem katkı maddeleri, un, pancar küspesi, arpa fleke, mısır fleke gibi temel girdilerin temininde ortak hareket ederek üreticilerimize maliyet avantajı sağlamayı hedefliyoruz.' },
          ].map((f) => (
            <div key={f.baslik} className="bg-white rounded-2xl shadow-sm p-6">
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{f.baslik}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{f.icerik}</p>
            </div>
          ))}
        </div>
        <Link to="/faaliyetler" className="inline-block mt-4 text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
          Tüm faaliyetlerimizi inceleyin →
        </Link>
      </div>

      {/* Birlikte Güçlüyüz */}
      <div className="rounded-2xl p-10 text-center text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
        <h3 className="text-2xl font-bold mb-4">Birlikte Güçlüyüz</h3>
        <p className="leading-relaxed max-w-2xl mx-auto">
          Kocayayla Köyü'nün geleceğini, toprağına sahip çıkan üreticilerimizle birlikte şekillendiriyoruz.
          Kooperatifimize dair daha fazla bilgi almak, ortaklık süreçleri hakkında detay öğrenmek veya
          iş birliği teklifinde bulunmak için bizimle her zaman iletişime geçebilirsiniz.
        </p>
        <Link to="/iletisim" className="inline-block mt-6 px-6 py-3 rounded-xl font-semibold bg-white" style={{ color: 'var(--color-primary)' }}>
          İletişime Geç
        </Link>
      </div>
    </div>
  )
}