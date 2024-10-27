import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./pages/home/Home";
import AddService from "./pages/addService/AddService";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import ProgrammingTechPage from "./pages/programmingTechPage/ProgrammingTechPage";
import GraphicsDesignPage from "./pages/graphicsDesignPage/GraphicsDesignPage";
import DigitalMarketingPage from "./pages/digitalMarketingPage/DigitalMarketingPage";
import VideoAnimationPage from "./pages/videoAnimationPage/VideoAnimationPage";
import BusinessPage from "./pages/businessPage/BusinessPage";
import WritingAndTranslatingPage from "./pages/writingAndTranslatingPage/WritingAndTranslatingPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SettingsPage from "./pages/setttingsPage/SettingsPage";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./Layout";
import Services from "./pages/services/Services";
import WebDevelopmentPage from "./pages/webDevelopmentPage/WebDevelopmentPage";
import AdminServices from "./pages/adminService/AdminService";
import EditService from "./pages/editService/EditService";
import Service from "./pages/service/Service";
import WebSiteMaintenancePage from "./pages/websiteMaintenancePage/WebSiteMaintenancePage";
import WordpressPage from "./pages/worpressPage/WordpressPage";
import ShopifyPage from "./pages/shopifyPage/ShopifyPage";
import CustomWebsitePage from "./pages/customWebsitePage/CustomWebsitePage";
import MobileAppDevelopmentPage from "./pages/mobileAppDevelopmentPage/MobileAppDevelopmentPage";
import CrossPlatformAppPage from "./pages/crossPlatformAppPage/CrossPlatformAppPage";
import AndroidAppDevelopmentPage from "./pages/androidAppDevelopmentPage/AndroidAppDevelopmentPage";
import IosAppDevelopmentPage from "./pages/iOsAppDevelopmentPage/IosAppDevelopmentPage";
import MobileAppMaintenancePage from "./pages/mobileAppMaintenancePage/MobileAppMaintenancePage";
import WixPage from "./pages/wixPage/WixPage";
import WebflowPage from "./pages/webflowPage/WebflowPage";
import GoDaddyPage from "./pages/goDaddyPage/GoDaddyPage";
import SquarespacePage from "./pages/squarespacePage/SquarespacePage";
import WooCommercePage from "./pages/wooCommercePage/WooCommercePage";
import SupportAndItPage from "./pages/supportAndIT/SupportAndItPage";
import CloudComputingPage from "./pages/cloudComputingPage/CloudComputingPage";
import CyberSecurityPage from "./pages/cyberSecurityPage/CyberSecurityPage";
import ConvertFilesPage from "./pages/convertFilesPage/ConvertFilesPage";
import LogoDesignPage from "./pages/logoDesignPage/LogoDesignPage";
import BrandStyleGuidesPage from "./pages/brandStyleGuidesPage/BrandStyleGuidesPage";
import BusinessCardAndStationaryPage from "./pages/businessCardAndStationaryPage/BusinessCardAndStationaryPage";
import FontAndTypoGraphyPage from "./pages/fontAndTypographyPage/FontAndTypoGraphyPage";
import WebDesignPage from "./pages/webDesignPage/WebDesignPage";
import AppDesignPage from "./pages/appDesignPage/AppDesignPage";
import UXDesignPage from "./pages/uxDesignPage/UXDesignPage";
import LandingPageDesignPage from "./pages/landingPageDesignPage/LandingPageDesignPage";
import IconDesignPage from "./pages/iconDesignPage/IconDesignPage";
import IllustrationPage from "./pages/illustrationPage/IllustrationPage";
import ChildrenBookIllustrationPage from "./pages/chidlrenBookIllustrationPage/ChildrenBookIllustrationPage";
import PatternDesignPage from "./pages/patternDesignPage/PatternDesignPage";
import CartoonAndComicsPage from "./pages/cartooAndComicsPage/CartoonAndComicsPage";
import ImageEditingPage from "./pages/imageEditingPage/ImageEditingPage";
import PresentationDesignPage from "./pages/presentationDesignPage/PresentationDesignPage";
import InfoGraphicPage from "./pages/infoGraphicPage/InfoGraphicPage";
import ResumeDesignPage from "./pages/resumeDesignPage/ResumeDesignPage";
import PackagingAndLabelPageDesign from "./pages/packagingAndLabelDesignPage/PackagingAndLabelPageDesign";
import BookDesignPage from "./pages/bookDesignPage/BookDesignPage";
import BookCoversPage from "./pages/bookCoversPage/BookCoversPage";
import AlbumCoverDesignPage from "./pages/albumCoverDesignPage/AlbumCoverDesignPage";
import SocialMediaDesignPage from "./pages/socialMediaDesignPage/SocialMediaDesignPage";
import ThumbnailDesignPage from "./pages/thumnailDesignPage/ThumbnailDesignPage";
import EmailDesignPage from "./pages/emailDesignPage/EmailDesignPage";
import WebBanersPage from "./pages/webBanersPage/WebBanersPage";
import TshirtAndMarchandisePage from "./pages/tShirtAndMarchandisePage/TshirtAndMarchandisePage";
import FashionDesignPage from "./pages/fashionDesignPage/FashionDesignPage";
import JewelryDesignPage from "./pages/jewelryDesignPage/JewelryDesignPage";
import Architecture3dPage from "./pages/architecture3dPage/Architecture3dPage";
import Industrial3dDesignPage from "./pages/industrial3dDesignPage/Industrial3dDesignPage";
import Fashion3dGarmentPage from "./pages/fashion3dGarmentPage/Fashion3dGarmentPage";
import Landscape3dDesignPage from "./pages/landscape3dDesignPage/Landscape3dDesignPage";
import Jewelry3dDesign from "./components/subCategory/Jewelry3dDesign";
import SearchEngineOptimizationPage from "./pages/searchEngineOptimizationPage/SearchEngineOptimizationPage";
import SearchEngineMarketingPage from "./pages/searchEngineMarketingPage/SearchEngineMarketingPage";
import LocalSeoPage from "./pages/localSeoPage/LocalSeoPage";
import EcommerceSeoPage from "./pages/ecommerceSeoPage/EcommerceSeoPage";
import VideoSeoPage from "./pages/videoSeoPage/VideoSeoPage";
import SocialMediaMarketingPage from "./pages/socialMediaMarketingPage/SocialMediaMarketingPage";
import PaidSocialMediaPage from "./pages/paidSocialMediaPage/PaidSocialMediaPage";
import SocialCommercePage from "./pages/socialCommercePage/SocialCommercePage";
import InfluencerMarketingPage from "./pages/influencerMarketingPage/InfluencerMarketingPage";
import CommunityManagementPage from "./pages/communityManagementPage/CommunityManagementPage";
import VideoMarketingPage from "./pages/videoMarketingPage/VideoMarketingPage";
import EcommerceMarketingPage from "./pages/ecommerceMarketingPage/EcommerceMarketingPage";
import AffiliateMarketingPage from "./pages/affiliateMarketingPage/AffiliateMarketingPage";
import DisplayAdvertisingPage from "./pages/displayAdvertisingPage/DisplayAdvertisingPage";
import MarketingStrategyPage from "./pages/marketingStrategyPage/MarketingStrategyPage";
import MarketingAdvicePage from "./pages/marketingAdvicePage/MarketingAdvicePage";
import WebAnalyticsPage from "./pages/webAnalyticsPage/WebAnalyticsPage";
import VisualEffectPage from "./pages/visalEffectPage/VisualEffectPage";
import IntroOutroVideoPage from "./pages/introOutroVideoPage/IntroOutroVideoPage";
import VideoTemplatesEditingPage from "./pages/videoTemplatesEditingPage/VideoTemplatesEditingPage";
import SubtitleAndCaptionPage from "./pages/subtitleAndCaptionPage/SubtitleAndCaptionPage";
import Animation2dPage from "./pages/animation2dPage/Animation2dPage";
import Animation3dPage from "./pages/animation3dPage/Animation3dPage";
import CharacterAnimationPage from "./pages/characterAnimationPage/CharacterAnimationPage";
import WhiteBoardAnimationPage from "./pages/whiteBoardAnimationPage/WhiteBoardAnimationPage";
import ExplainerVideosPage from "./pages/explainerVideosPage/ExplainerVideosPage";
import AnimatedLogosPage from "./pages/animatedLogosPage/AnimatedLogosPage";
import LottieAndWebAnimationPage from "./pages/lottieAndWebAnimationPage/LottieAndWebAnimationPage";
import TextAnimationPage from "./pages/textAnimationPage/TextAnimationPage";
import MotionTrackingPage from "./pages/motionTrackingPage/MotionTrackingPage";
import TransitionAndEffectsPage from "./pages/transitionsAndEffectsPage/TransitionAndEffectsPage";
import VideoAndCommercialsPage from "./pages/videoAndCommercialsPage/VideoAndCommercialsPage";
import SocialMediaVideosPage from "./pages/socialMediaVideosPage/SocialMediaVideosPage";
import SlideshowVideosPage from "./pages/slideshowVideosPage/SlideshowVideosPage";
import ExplainerVideoProductionPage from "./pages/explainerVideoProductionPage/ExplainerVideoProductionPage";
import MarketingResearchPage from "./pages/marketingResearchPage/MarketingResearchPage";
import BusinessPlanPage from "./pages/businessPlanPage/BusinessPlanPage";
import BusinessConsultingPage from "./pages/businessConsultingPage/BusinessConsultingPage";
import SoftwareManagementPage from "./pages/softwareManagentPage/SoftwareManagementPage";
import VirtualAssistantPage from "./pages/virtualAssistantPage/VirtualAssistantPage";
import EcommerceManagementPage from "./pages/ecommerceManagementPage/EcommerceManagementPage";
import ProjectManagementPage from "./pages/projectManagementPage/ProjectManagementPage";
import SalesPage from "./pages/salesPage/SalesPage";
import LeadGenerationPage from "./pages/leadGenerationPage/LeadGenerationPage";
import CallCenterAndCallingPage from "./pages/callCenterAndCallingPage/CallCenterAndCallingPage";
import CustomerCarePage from "./pages/customerCarePage/CustomerCarePage";
import BlogWritingPage from "./pages/blogWritingPage/BlogWritingPage";
import CopywritingPage from "./pages/copywritingPage/CopywritingPage";
import WebsiteContentPage from "./pages/websiteContentPage/WebsiteContentPage";
import CreativeWritingPage from "./pages/creativeWritingPage/CreativeWritingPage";
import SpeachWritingPage from "./pages/speachWritingPage/SpeachWritingPage";
import BookFormattingPage from "./pages/bookFormattingPage/BookFormattingPage";
import BookAndEBookWritingPage from "./pages/bookAndeBookWritingPage/BookAndEBookWritingPage";
import BetaReadingPage from "./pages/betaReadingPage/BetaReadingPage";
import ProoFreadingAndEditingPage from "./pages/prooFreadingAndEditingPage/ProoFreadingAndEditingPage";
import TranslationPage from "./pages/translationPage/TranslationPage";
import TranscriptionPage from "./pages/transcriptionPage/TranscriptionPage";
import LocalizationPage from "./pages/localizationPage/LocalizationPage";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import SearchResult from "./pages/searchResultPage/SearchResult";
import ServiceList from "./pages/serviceList/ServiceList";

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

const RedirectUser = () => {
  const currentUser = getCurrentUser();

  if (currentUser) {
    return currentUser.isAdmin ? (
      <Navigate to="/admin-dashboard" />
    ) : (
      <Navigate to="/service-list" />
    );
  }

  return <Home />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RedirectUser />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/service-list",
        element: <ServiceList />,
      },
      {
        path: "/programming-tech",
        element: <ProgrammingTechPage />,
      },
      {
        path: "/programming-tech/web-development",
        element: <WebDevelopmentPage />,
      },
      {
        path: "/programming-tech/website-maintenance",
        element: <WebSiteMaintenancePage />,
      },
      {
        path: "/programming-tech/wordpress",
        element: <WordpressPage />,
      },
      {
        path: "/programming-tech/shopify",
        element: <ShopifyPage />,
      },
      {
        path: "/programming-tech/custom-websites",
        element: <CustomWebsitePage />,
      },
      {
        path: "/programming-tech/mobile-app-development",
        element: <MobileAppDevelopmentPage />,
      },
      {
        path: "/programming-tech/cross-platform-app",
        element: <CrossPlatformAppPage />,
      },
      {
        path: "/programming-tech/android-app-development",
        element: <AndroidAppDevelopmentPage />,
      },
      {
        path: "/programming-tech/ios-app-development",
        element: <IosAppDevelopmentPage />,
      },
      {
        path: "/programming-tech/mobile-app-maintenance",
        element: <MobileAppMaintenancePage />,
      },
      {
        path: "/programming-tech/wix",
        element: <WixPage />,
      },
      {
        path: "/programming-tech/webflow",
        element: <WebflowPage />,
      },
      {
        path: "/programming-tech/godaddy",
        element: <GoDaddyPage />,
      },
      {
        path: "/programming-tech/squarespace",
        element: <SquarespacePage />,
      },
      {
        path: "/programming-tech/woocommerce",
        element: <WooCommercePage />,
      },
      {
        path: "/programming-tech/support-it",
        element: <SupportAndItPage />,
      },
      {
        path: "/programming-tech/cloud-computing",
        element: <CloudComputingPage />,
      },
      {
        path: "/programming-tech/cyber-security",
        element: <CyberSecurityPage />,
      },
      {
        path: "/programming-tech/convert-files",
        element: <ConvertFilesPage />,
      },
      {
        path: "/graphics-design",
        element: <GraphicsDesignPage />,
      },
      {
        path: "/graphics-design/logo-design",
        element: <LogoDesignPage />,
      },
      {
        path: "/graphics-design/brand-style-guides",
        element: <BrandStyleGuidesPage />,
      },
      {
        path: "/graphics-design/business-card-stationary",
        element: <BusinessCardAndStationaryPage />,
      },
      {
        path: "/graphics-design/font-typography",
        element: <FontAndTypoGraphyPage />,
      },
      {
        path: "/graphics-design/web-design",
        element: <WebDesignPage />,
      },
      {
        path: "/graphics-design/app-design",
        element: <AppDesignPage />,
      },
      {
        path: "/graphics-design/ux-design",
        element: <UXDesignPage />,
      },
      {
        path: "/graphics-design/landing-page-design",
        element: <LandingPageDesignPage />,
      },
      {
        path: "/graphics-design/icon-design",
        element: <IconDesignPage />,
      },
      {
        path: "/graphics-design/illustration",
        element: <IllustrationPage />,
      },
      {
        path: "/graphics-design/children-book-illustration",
        element: <ChildrenBookIllustrationPage />,
      },
      {
        path: "/graphics-design/pattern-design",
        element: <PatternDesignPage />,
      },
      {
        path: "/graphics-design/cartoon-comics",
        element: <CartoonAndComicsPage />,
      },
      {
        path: "/graphics-design/image-editing",
        element: <ImageEditingPage />,
      },
      {
        path: "/graphics-design/presentation-design",
        element: <PresentationDesignPage />,
      },
      {
        path: "/graphics-design/infographic-design",
        element: <InfoGraphicPage />,
      },
      {
        path: "/graphics-design/resume-design",
        element: <ResumeDesignPage />,
      },
      {
        path: "/graphics-design/packaging-label-design",
        element: <PackagingAndLabelPageDesign />,
      },
      {
        path: "/graphics-design/book-design",
        element: <BookDesignPage />,
      },
      {
        path: "/graphics-design/book-covers",
        element: <BookCoversPage />,
      },
      {
        path: "/graphics-design/album-cover-design",
        element: <AlbumCoverDesignPage />,
      },
      {
        path: "/graphics-design/social-media-design",
        element: <SocialMediaDesignPage />,
      },
      {
        path: "/graphics-design/thumbnail-design",
        element: <ThumbnailDesignPage />,
      },
      {
        path: "/graphics-design/email-design",
        element: <EmailDesignPage />,
      },
      {
        path: "/graphics-design/web-banners",
        element: <WebBanersPage />,
      },
      {
        path: "/graphics-design/tshirt-marchandise",
        element: <TshirtAndMarchandisePage />,
      },
      {
        path: "/graphics-design/fashion-design",
        element: <FashionDesignPage />,
      },
      {
        path: "/graphics-design/jewelry-design",
        element: <JewelryDesignPage />,
      },
      {
        path: "/graphics-design/3d-architecture-design",
        element: <Architecture3dPage />,
      },
      {
        path: "/graphics-design/3d-industrial-design",
        element: <Industrial3dDesignPage />,
      },
      {
        path: "/graphics-design/3d-fashion-design",
        element: <Fashion3dGarmentPage />,
      },
      {
        path: "/graphics-design/3d-landscape-design",
        element: <Landscape3dDesignPage />,
      },
      {
        path: "/graphics-design/3d-jewelry-design",
        element: <Jewelry3dDesign />,
      },
      {
        path: "/digital-marketing",
        element: <DigitalMarketingPage />,
      },
      {
        path: "/digital-marketing/search-engine-optimization",
        element: <SearchEngineOptimizationPage />,
      },
      {
        path: "/digital-marketing/search-engine-marketing",
        element: <SearchEngineMarketingPage />,
      },
      {
        path: "/digital-marketing/local-seo",
        element: <LocalSeoPage />,
      },
      {
        path: "/digital-marketing/ecommerce-seo",
        element: <EcommerceSeoPage />,
      },
      {
        path: "/digital-marketing/video-seo",
        element: <VideoSeoPage />,
      },
      {
        path: "/digital-marketing/social-media-marketing",
        element: <SocialMediaMarketingPage />,
      },
      {
        path: "/digital-marketing/paid-social-media",
        element: <PaidSocialMediaPage />,
      },
      {
        path: "/digital-marketing/social-commerce",
        element: <SocialCommercePage />,
      },
      {
        path: "/digital-marketing/influencer-marketing",
        element: <InfluencerMarketingPage />,
      },
      {
        path: "/digital-marketing/community-management",
        element: <CommunityManagementPage />,
      },
      {
        path: "/digital-marketing/video-marketing",
        element: <VideoMarketingPage />,
      },
      {
        path: "/digital-marketing/ecommerce-marketing",
        element: <EcommerceMarketingPage />,
      },
      {
        path: "/digital-marketing/affiliate-marketing",
        element: <AffiliateMarketingPage />,
      },
      {
        path: "/digital-marketing/display-advertising",
        element: <DisplayAdvertisingPage />,
      },
      {
        path: "/digital-marketing/marketing-strategy",
        element: <MarketingStrategyPage />,
      },
      {
        path: "/digital-marketing/marketing-advice",
        element: <MarketingAdvicePage />,
      },
      {
        path: "/digital-marketing/web-analytics",
        element: <WebAnalyticsPage />,
      },
      {
        path: "/video-animation",
        element: <VideoAnimationPage />,
      },
      {
        path: "/video-animation/video-editing",
        element: <VideoMarketingPage />,
      },
      {
        path: "/video-animation/visual-effect",
        element: <VisualEffectPage />,
      },
      {
        path: "/video-animation/intro-outro-videos",
        element: <IntroOutroVideoPage />,
      },
      {
        path: "/video-animation/video-template-editing",
        element: <VideoTemplatesEditingPage />,
      },
      {
        path: "/video-animation/subtitle-caption",
        element: <SubtitleAndCaptionPage />,
      },
      {
        path: "/video-animation/2d-animation",
        element: <Animation2dPage />,
      },
      {
        path: "/video-animation/3d-animation",
        element: <Animation3dPage />,
      },
      {
        path: "/video-animation/character-animation",
        element: <CharacterAnimationPage />,
      },
      {
        path: "/video-animation/whiteboard-animation",
        element: <WhiteBoardAnimationPage />,
      },
      {
        path: "/video-animation/animated-logos",
        element: <AnimatedLogosPage />,
      },
      {
        path: "/video-animation/lottie-web-animation",
        element: <LottieAndWebAnimationPage />,
      },
      {
        path: "/video-animation/text-animation",
        element: <TextAnimationPage />,
      },
      {
        path: "/video-animation/motion-tracking",
        element: <MotionTrackingPage />,
      },
      {
        path: "/video-animation/transitions-effects",
        element: <TransitionAndEffectsPage />,
      },
      {
        path: "/video-animation/video-commercial",
        element: <VideoAndCommercialsPage />,
      },
      {
        path: "/video-animation/social-media-video",
        element: <SocialMediaVideosPage />,
      },
      {
        path: "/video-animation/slideshow-video",
        element: <SlideshowVideosPage />,
      },
      {
        path: "/video-animation/explainer-video-production",
        element: <ExplainerVideoProductionPage />,
      },
      {
        path: "/video-animation/explainer-videos",
        element: <ExplainerVideosPage />,
      },
      {
        path: "/business",
        element: <BusinessPage />,
      },
      {
        path: "/business/marketing-research",
        element: <MarketingResearchPage />,
      },
      {
        path: "/business/business-plan",
        element: <BusinessPlanPage />,
      },
      {
        path: "/business/business-consulting",
        element: <BusinessConsultingPage />,
      },
      {
        path: "/business/software-management",
        element: <SoftwareManagementPage />,
      },
      {
        path: "/business/virtual-assistant",
        element: <VirtualAssistantPage />,
      },
      {
        path: "/business/ecommerce-management",
        element: <EcommerceManagementPage />,
      },
      {
        path: "/business/project-management",
        element: <ProjectManagementPage />,
      },
      {
        path: "/business/sales",
        element: <SalesPage />,
      },
      {
        path: "/business/lead-generation",
        element: <LeadGenerationPage />,
      },
      {
        path: "/business/call-center",
        element: <CallCenterAndCallingPage />,
      },
      {
        path: "/business/customer-care",
        element: <CustomerCarePage />,
      },
      {
        path: "/writing-translation",
        element: <WritingAndTranslatingPage />,
      },
      {
        path: "/writing-translation/blog-writing",
        element: <BlogWritingPage />,
      },
      {
        path: "/writing-translation/copywriting",
        element: <CopywritingPage />,
      },
      {
        path: "/writing-translation/website-content",
        element: <WebsiteContentPage />,
      },
      {
        path: "/writing-translation/creative-writing",
        element: <CreativeWritingPage />,
      },
      {
        path: "/writing-translation/speach-writing",
        element: <SpeachWritingPage />,
      },
      {
        path: "/writing-translation/book-formatting",
        element: <BookFormattingPage />,
      },
      {
        path: "/writing-translation/book-ebook-writing",
        element: <BookAndEBookWritingPage />,
      },
      {
        path: "/writing-translation/beta-reading",
        element: <BetaReadingPage />,
      },
      {
        path: "/writing-translation/proofreading-editing",
        element: <ProoFreadingAndEditingPage />,
      },
      {
        path: "/writing-translation/translation",
        element: <TranslationPage />,
      },
      {
        path: "/writing-translation/transcription",
        element: <TranscriptionPage />,
      },
      {
        path: "/writing-translation/localization",
        element: <LocalizationPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/setting",
        element: <SettingsPage />,
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute adminOnly={true}>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-services",
        element: (
          <PrivateRoute adminOnly={true}>
            <AdminServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-service/:id",
        element: (
          <PrivateRoute adminOnly={true}>
            <EditService />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/:id",
        element: <Service />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/orders/:orderId",
        element: <OrderDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/messages/:id",
        element: <Message />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/admin-dashboard",
        element: (
          <PrivateRoute adminOnly={true}>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
