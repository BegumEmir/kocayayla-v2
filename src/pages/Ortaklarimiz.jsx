import { Helmet } from 'react-helmet-async'

export default function Ortaklarimiz() {
  return (

    <>
    <Helmet>
      <title>Ortaklarımız | S.S. Kocayayla Köyü Tarımsal Kalkınma Kooperatifi</title>
      <meta name="description" content="Kocayayla Kooperatifi ortakları listesi." />
    </Helmet>
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        Ortaklarımız
      </h1>

      {/* İstatistikler */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <p className="text-5xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>179</p>
          <p className="text-gray-500">Ortak</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <p className="text-5xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>78</p>
          <p className="text-gray-500">Aktif Ortak</p>
        </div>
      </div>

      {/* Açıklama */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <p className="text-gray-600 leading-relaxed mb-4">
          Kooperatifimiz, Kocayayla Köyü'nde tarım ve hayvancılıkla uğraşan üreticilerin gönüllü katılımıyla faaliyet göstermektedir. Bugün kooperatifimizin bünyesinde <strong>179 ortağımız</strong> bulunmakta olup bunlardan <strong>78 tanesi aktif olarak</strong> faaliyetlerine devam etmektedir.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Ortaklarımız, kooperatifimizin sunduğu hizmetlerden eşit ve adil şekilde yararlanmakta; üretim, tedarik ve hizmet süreçlerine katılım sağlayarak kooperatifimizin gelişimine katkıda bulunmaktadır. Üretici gücünü birleştiren bu yapı sayesinde hem bireysel hem de toplu fayda hedeflenmektedir.
        </p>
      </div>

      {/* KOOPBİS */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
          KOOPBİS (Kooperatif Bilgi Sistemi)
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          KOOPBİS (Kooperatif Bilgi Sistemi), Ticaret Bakanlığı tarafından oluşturulan ve Türkiye genelindeki kooperatiflere ait bilgilerin kayıt altına alındığı resmi bir dijital sistemdir.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          Bu sistem aracılığıyla kooperatiflerin ortaklık yapıları, yönetim ve denetim kurulları, faaliyet bilgileri ve resmi kayıtları merkezi olarak takip edilmektedir. KOOPBİS, kooperatiflerde şeffaflığın artırılmasını ve güncel bilgilerin düzenli olarak tutulmasını amaçlamaktadır.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Kooperatifimiz de KOOPBİS sistemine kayıtlı olup, resmi bilgileri bu sistem üzerinden takip edilebilmektedir.
        </p>
        <a
          href="https://koopbis.ticaret.gov.tr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-xl border text-sm font-medium transition-colors hover:bg-green-50"
          style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
        >
          KOOPBİS sistemine git →
        </a>
      </div>

      {/* Ortak Olmanın Avantajları */}
      <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary-dark)' }}>
        Ortak Olmanın Avantajları
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          { baslik: 'Girdi Maliyetlerinde Avantaj', icerik: 'Yem, un ve diğer temel girdiler kooperatif aracılığıyla daha uygun koşullarla temin edilir.' },
          { baslik: 'Ürünlerin Değerinde Satışı', icerik: 'Süt ve diğer ürünler toplu şekilde değerlendirilerek üreticimizin emeğinin karşılığı korunur.' },
          { baslik: 'Makine ve Hizmet Desteği', icerik: 'Traktör, kepçe, balya ve değirmen gibi hizmetlerden ortaklar eşit ve planlı şekilde faydalanır.' },
          { baslik: 'Dayanışma ve Güven', icerik: 'Kooperatif çatısı altında üreticiler arası dayanışma güçlenir, sürdürülebilir üretim desteklenir.' },
        ].map((item) => (
          <div key={item.baslik} className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>{item.baslik}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.icerik}</p>
          </div>
        ))}
      </div>

      {/* Ortak Olmak İsteyenler */}
      <div className="rounded-2xl p-8 mb-8 text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
        <h2 className="text-2xl font-bold mb-4">Ortak Olmak İsteyenler İçin</h2>
        <p className="leading-relaxed mb-3">
          Kooperatifimize ortak olmak isteyen üreticilerimiz, başvuru süreci ve ortaklık şartları hakkında detaylı bilgi almak için bizimle iletişime geçebilirler. Başvurular ilgili mevzuat ve kooperatif ana sözleşmesi kapsamında değerlendirilmektedir.
        </p>
        <p className="leading-relaxed mb-3">
          Güncel ortaklık bilgileri ve resmi kayıtlar KOOPBİS sistemi üzerinden takip edilmektedir.
        </p>
        <p className="leading-relaxed">
          Aşağıda yer alan dilekçeler indirilerek doldurulabilir.
        </p>
      </div>

      {/* Dilekçeler */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
          Ortaklık İşlemleri ve Dilekçeler
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Kooperatifimizde ortaklık başvurusu ve hisse devri işlemleri, aşağıda yer alan resmi dilekçeler aracılığıyla yapılmaktadır. Gerekli belgeler dilekçelerde belirtilmiş olup, başvurular kooperatif yönetimi tarafından değerlendirilmektedir.
        </p>

        <div className="flex flex-col gap-3 mb-6">
          {[
            { ad: 'Ortaklık Başvuru Dilekçesi', url: '/dilekceler/uyelik-basvuru.pdf' },
            { ad: 'Hisse Devir Dilekçesi', url: '/dilekceler/hisse-devir.pdf' },
          ].map((d) => (
            <div key={d.ad} className="flex items-center justify-between p-4 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">📄</span>
                <span className="font-medium text-gray-700">{d.ad}</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border text-sm font-medium"
                  style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                >
                  Görüntüle
                </a>
                <a
                  href={d.url}
                  download
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  İndir
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Doldurulan dilekçeler ıslak imzalı olarak kooperatifimize teslim edilmelidir.
        </p>
      </div>
    </div>
    </>
  )
}