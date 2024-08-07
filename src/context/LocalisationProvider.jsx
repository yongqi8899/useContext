import { createContext, useState } from "react";

export const LocalisationContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const translations = {
    en: {
      header: {
        home: "Home",
        myBook: "My Book",
        login: "Login",
        register: "Register",
        logout: "Logout",
        language: "Language",
      },
      content: {
        title: "Discover Better Books, Enrich Your Life",
        books: {
          title: "Featured Books",
          content:
            "On our website, you can find a wide variety of books. Whether you love fiction, non-fiction, or sci-fi, we have the perfect book for you.",
        },
        authors: {
          title: "Famous Authors",
          content:
            "Our website features works from numerous famous authors. Learn about their lives and creative backgrounds to better appreciate their works.",
        },
        contact: {
          title: "Contact Us",
          content:
            "If you have any questions or need more information, please feel free to contact us. We are happy to assist you.",
        },
      },
      footer: {
        privacy_policy: "Privacy Policy",
        terms_of_service: "Terms of Service",
        contact_info: "Contact Information",
      },
    },
    de: {
      header: {
        home: "Startseite",
        myBook: "Mein Buch",
        login: "Anmelden",
        register: "Registrieren",
        logout: "Abmelden",
        language: "Sprache",
      },
      content: {
        title: "Entdecken Sie bessere Bücher, bereichern Sie Ihr Leben",
        books: {
          title: "Empfohlene Bücher",
          content:
            "Auf unserer Website finden Sie eine Vielzahl von Büchern. Ob Sie Belletristik, Sachbücher oder Science-Fiction lieben, wir haben das perfekte Buch für Sie.",
        },
        authors: {
          title: "Berühmte Autoren",
          content:
            "Unsere Website enthält Werke zahlreicher berühmter Autoren. Erfahren Sie mehr über ihr Leben und ihren kreativen Hintergrund, um ihre Werke besser zu schätzen.",
        },
        contact: {
          title: "Kontaktieren Sie uns",
          content:
            "Wenn Sie Fragen haben oder weitere Informationen benötigen, können Sie uns gerne kontaktieren. Wir helfen Ihnen gerne weiter.",
        },
      },
      footer: {
        privacy_policy: "Datenschutzrichtlinie",
        terms_of_service: "Nutzungsbedingungen",
        contact_info: "Kontaktinformation",
      },
    },
    zh: {
      header: {
        home: "首页",
        myBook: "我的书",
        login: "登录",
        register: "注册",
        logout: "登出",
        language: "语言",
      },
      content: {
        title: "发现更好的书籍，丰富你的生活",
        books: {
          title: "精选书籍",
          content:
            "在我们的网站上，你可以找到各种各样的书籍。无论你是喜欢小说、非小说类书籍还是科幻小说，我们都有适合你的书籍。",
        },
        authors: {
          title: "著名作者",
          content:
            "我们的网站汇集了众多著名作者的作品。了解他们的生平和创作背景，让你更好地理解他们的作品。",
        },
        contact: {
          title: "联系我们",
          content:
            "如果你有任何问题或需要更多信息，请随时与我们联系。我们很乐意帮助你。",
        },
      },
      footer: {
        privacy_policy: "隐私政策",
        terms_of_service: "服务条款",
        contact_info: "联系信息",
      },
    },
  };

  return (
    <LocalisationContext.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </LocalisationContext.Provider>
  );
};

export default LocalisationProvider;
