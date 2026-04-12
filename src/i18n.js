import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "HOME",
        "members": "MEMBERS",
        "events": "EVENTS",
        "tickets": "TICKETS",
        "fans": "FANS",
        "showcase": "SHOWCASE",
        "shop": "SHOP",
        "online_shop": "Online Shop",
        "buy_merch": "Buy Merchandise",
        "contact": "Contact Us",
        "contact_desc": "Get in Touch",
        "live": "Live Events",
        "live_desc": "Join Our Shows"
      },
      "home": {
        "join_rev": "Join the Revolution!",
        "join_desc": "Be part of our journey and experience the revolution in idol entertainment.",
        "fan_club": "Official Fan Club",
        "merch_store": "Merchandise Store",
        "latest_news": "Latest News",
        "featured_members": "Featured Members",
        "view_all_members": "View All Members"
      }
    }
  },
  id: {
    translation: {
      "nav": {
        "home": "BERANDA",
        "members": "ANGGOTA",
        "events": "ACARA",
        "tickets": "TIKET",
        "fans": "PENGGEMAR",
        "showcase": "KARYA",
        "shop": "TOKO",
        "online_shop": "Toko Online",
        "buy_merch": "Beli Merchandise",
        "contact": "Hubungi Kami",
        "contact_desc": "Sapa Kami",
        "live": "Acara Langsung",
        "live_desc": "Ikuti Pertunjukan"
      },
      "home": {
        "join_rev": "Bergabunglah dengan Revolusi!",
        "join_desc": "Jadilah bagian dari perjalanan kami dan alami revolusi hiburan idol.",
        "fan_club": "Klub Penggemar Resmi",
        "merch_store": "Toko Merchandise",
        "latest_news": "Berita Terbaru",
        "featured_members": "Anggota Pilihan",
        "view_all_members": "Lihat Semua Anggota"
      }
    }
  },
  ja: {
    translation: {
      "nav": {
        "home": "ホーム",
        "members": "メンバー",
        "events": "イベント",
        "tickets": "チケット",
        "fans": "ファン",
        "showcase": "ショーケース",
        "shop": "ショップ",
        "online_shop": "オンラインショップ",
        "buy_merch": "グッズ購入",
        "contact": "お問い合わせ",
        "contact_desc": "連絡する",
        "live": "ライブイベント",
        "live_desc": "ショーに参加"
      },
      "home": {
        "join_rev": "革命に参加しよう！",
        "join_desc": "私たちの旅の一部になり、アイドルエンターテインメントの革命を体験してください。",
        "fan_club": "公式ファンクラブ",
        "merch_store": "オフィシャルストア",
        "latest_news": "最新ニュース",
        "featured_members": "注目のメンバー",
        "view_all_members": "すべてのメンバーを見る"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
