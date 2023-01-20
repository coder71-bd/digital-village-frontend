import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Components/ChattingApp/Chat/Chat";
import Join from "./Components/ChattingApp/Join/Join";
import ScrollToTop from "./Components/ScrollToTop";
import TestFileUpload from "./Components/TestFileUpload";
import UnAuthorized from "./Components/UnAuthorized";
import { AuthProvider } from "./context/AuthProvider";
import {
  default as AdminDashboard,
  default as DevelopmentDashboard,
} from "./Pages/Admin/AdminDashboard";
import AdminHome from "./Pages/Admin/AdminHome/AdminHome";
import AllUsers from "./Pages/Admin/AllUsers/AllUsers";
import ManageDevelopmentProposals from "./Pages/Admin/DevelopmentProposal/ManageDevelopmentProposals/ManageDevelopmentProposals";
import AddCause from "./Pages/Admin/Donation/AddCause/AddCause";
import AllCauses from "./Pages/Admin/Donation/AllCauses/AllCauses";
import AllHelpRequests from "./Pages/Admin/Donation/AllHelpRequests/AllHelpRequests";
import ManageAllDonors from "./Pages/Admin/Donation/ManageAllDonors/ManageAllDonors";
import UpdateCause from "./Pages/Admin/Donation/updateCause/UpdateCause";
import MarketManagement from "./Pages/Admin/Market/MarketManagement";
import AddNews from "./Pages/Admin/News/AddNews/AddNews";
import ManageNews from "./Pages/Admin/News/ManageNews/ManageNews";
import SendNotification from "./Pages/Admin/SendNotification/SendNotification";
import AllNews from "./Pages/AllNews/AllNews";
import Development from "./Pages/Development/Development";
import Donations from "./Pages/Donations/Donations";
import SingleCauseDetail from "./Pages/Donations/SingleCauseDetail/SingleCauseDetail";
import BlogDetails from "./Pages/Education/BlogDetails/BlogDetails";
import DetailVideo from "./Pages/Education/DetailVideo/DetailVideo";
import Education from "./Pages/Education/Education";
import AllBlogs from "./Pages/Education/Student/AllBlogs/AllBlogs";
import AllVideos from "./Pages/Education/Student/AllVideos/AllVideos";
import FavouriteBlogs from "./Pages/Education/Student/FavouriteBlogs/FavouriteBlogs";
import FavouriteVideos from "./Pages/Education/Student/FavouriteVideos/FavouriteVideos";
import Student from "./Pages/Education/Student/Student";
import StudentAnalytics from "./Pages/Education/Student/StudentAnalytics/StudentAnalytics";
import StudentHome from "./Pages/Education/Student/StudentHome/StudentHome";
import EditBlog from "./Pages/Education/Teacher/Myblogs/EditBlog/EditBlog";
import Myblogs from "./Pages/Education/Teacher/Myblogs/Myblogs";
import EditVideo from "./Pages/Education/Teacher/Myvideos/EditVideo/EditVideo";
import Myvideos from "./Pages/Education/Teacher/Myvideos/Myvideos";
import PublishBlog from "./Pages/Education/Teacher/PublishBlog/PublishBlog";
import PublishVideo from "./Pages/Education/Teacher/PublishVideo/PublishVideo";
import RegisterTeacher from "./Pages/Education/Teacher/RegisterTeacher";
import Teacher from "./Pages/Education/Teacher/Teacher";
import TeacherAnalytics from "./Pages/Education/Teacher/TeacherAnalytics/TeacherAnalytics";
import EMarket from "./Pages/EMarket/EMarket";
import Cart from "./Pages/EMarket/MarketComponents/Cart/Cart";
import Checkout from "./Pages/EMarket/MarketComponents/Checkout/Checkout";
import ConfirmPayment from "./Pages/EMarket/MarketComponents/ConFirmPayments/ConfirmPayment.jsx";
import MyOrder from "./Pages/EMarket/MarketComponents/DashboardItems/MyOrder";
import MedicineShop from "./Pages/EMarket/MarketComponents/MedicineShop/MedicineShop";
import ProductDetails from "./Pages/EMarket/MarketComponents/ProductDetails";
import MarketDashboard from "./Pages/EMarket/MarketDashboard";
import AddEvents from "./Pages/Events/AddEvents/AddEvents";
import AllEvents from "./Pages/Events/AllEvents/AllEvents";
import ArchivedEvents from "./Pages/Events/ArchivedEvents/ArchivedEvents";
import EventDetails from "./Pages/Events/EventDetails/EventDetails";
import Events from "./Pages/Events/Events";
import ManageEvents from "./Pages/Events/ManageEvents/ManageEvents";
import MyBookedEvents from "./Pages/Events/MyBookedEvents/MyBookedEvents";
import UpcomingEvents from "./Pages/Events/UpcomingEvents/UpcomingEvents";
import AddAppointment from "./Pages/Medical/DoctorsAppointment/AddAppointment/AddAppointment";
import DoctorsAppointment from "./Pages/Medical/DoctorsAppointment/DoctorsAppointment";
import UserAppointments from "./Pages/Medical/DoctorsAppointment/UserAppointments/UserAppointments";
import Medical from "./Pages/Medical/Medical";
import MedicalHome from "./Pages/Medical/MedicalHome";
import FrequentlyAsked from "./Pages/Medical/VaccineRegistration/FrequentlyAsked/FrequentlyAsked";
import RegForm from "./Pages/Medical/VaccineRegistration/RegForm/RegForm";
import VaccineInfo from "./Pages/Medical/VaccineRegistration/RegistrationPdf/VaccineInfo";
import Status from "./Pages/Medical/VaccineRegistration/Status/Status";
import StatusCheck from "./Pages/Medical/VaccineRegistration/Status/StatusCheck";
import VaccineOptions from "./Pages/Medical/VaccineRegistration/VaccineOptions/VaccineOptions";
import VaccineRegistration from "./Pages/Medical/VaccineRegistration/VaccineRegistration";
import Notification from "./Pages/Notification/Notification";
import About from "./Pages/shared/About/About";
import Login from "./Pages/shared/Authentication/Login/Login";
import Register from "./Pages/shared/Authentication/Register/Register";
import Contact from "./Pages/shared/Contact/Contact";
import Footer from "./Pages/shared/Home/Footer/Footer";
import Header from "./Pages/shared/Home/Header/Header";
import Home from "./Pages/shared/Home/Home";
import EditNews from "./Pages/shared/Home/News/EditNews/EditNews";
import NewsDetails from "./Pages/shared/Home/News/NewsDetails/NewsDetails";
import NotFound from "./Pages/shared/NotFound/NotFound";
import AddFriend from "./Pages/SocialMedia/Connections/BoardComponent/AddFriend.jsx";
import BoardHome from "./Pages/SocialMedia/Connections/BoardComponent/BoardHome.jsx";
import Requested from "./Pages/SocialMedia/Connections/BoardComponent/Requested";
import Requesting from "./Pages/SocialMedia/Connections/BoardComponent/Requesting";
import ConnectionBoard from "./Pages/SocialMedia/Connections/ConnectionBoard";
import SocialHome from "./Pages/SocialMedia/Home/SocialHome";
import AddDevelopmentProposal from "./Pages/User/DevelopmentProposal/AddDevelopmentProposal/AddDevelopmentProposal";
import MyDevelopmentProposals from "./Pages/User/DevelopmentProposal/MyDevelopmentProposals/MyDevelopmentProposals";
import MyDonations from "./Pages/User/Donation/MyDonations";
import MyHelpRequests from "./Pages/User/Donation/MyHelpRequests";
import Profile from "./Pages/User/Profile/Profile";
import EditReview from "./Pages/User/Review/EditReview/EditReview";
import Review from "./Pages/User/Review/Review";
import UserDashboard from "./Pages/User/UserDashboard";
import AdminRoute from "./SecureRoutes/AdminRoute";
import PrivateRoute from "./SecureRoutes/PrivateRoute";

export const Roles = {
  User: 1000,
  Admin: 5000,
  Teacher: 3000,
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/testFileUpload" element={<TestFileUpload />} />
          {/* ALL PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="allUsers" element={<AllUsers />} />
            {/* notification route */}
            <Route path="notifications" element={<Notification />} />

            {/* user routes */}
            <Route path="userdashboard" element={<UserDashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route
                path="addDevelopmentProposal"
                element={<AddDevelopmentProposal />}
              />
              <Route
                path="myDevelopmentProposals"
                element={<MyDevelopmentProposals />}
              />
              <Route path="myBookedEvents" element={<MyBookedEvents />} />
              <Route path="review" element={<Review />} />
              <Route path="myDonations" element={<MyDonations />} />
              <Route path="myHelpRequests" element={<MyHelpRequests />} />
              <Route path="editReview/:id" element={<EditReview />} />
            </Route>

            {/* EDUCATION RELATED ROUTES */}
            <Route path="education" element={<Education />} />
            <Route path="registerTeacher" element={<RegisterTeacher />} />

            {/* social media related routes */}
            <Route path="chat" element={<Chat />} />
            <Route path="join" element={<Join />} />

            {/* routes for teacher */}
            <Route
              element={
                <AdminRoute allowedRoles={[Roles.Admin, Roles.Teacher]} />
              }
            >
              <Route path="teacher" element={<Teacher />}>
                <Route path="myPublishedBlogs" element={<Myblogs />} />
                <Route path="editBlog/:id" element={<EditBlog />} />
                <Route path="myPublishedVideos" element={<Myvideos />} />
                <Route path="editVideo/:id" element={<EditVideo />} />
                <Route path="publishBlog" element={<PublishBlog />} />
                <Route path="publishVideo" element={<PublishVideo />} />
                <Route path="analytics" element={<TeacherAnalytics />} />
              </Route>
            </Route>

            {/* routes for student */}
            <Route path="student" element={<Student />}>
              <Route path="home" element={<StudentHome />} />
              <Route path="allBlogs" element={<AllBlogs />} />
              <Route path="allVideos" element={<AllVideos />} />
              <Route path="favouriteBlogs" element={<FavouriteBlogs />} />
              <Route path="favouriteVideos" element={<FavouriteVideos />} />
              <Route path="analytics" element={<StudentAnalytics />} />
            </Route>
            <Route path="detailvideo/:id" element={<DetailVideo />} />
            <Route path="blogDetails/:id" element={<BlogDetails />} />

            {/* medical related routes */}
            <Route path="medical" element={<Medical />}>
              <Route path="medical" element={<MedicalHome />} />
              <Route path="vaccine" element={<VaccineRegistration />} />
              <Route path="options" element={<VaccineOptions />} />
              <Route path="status" element={<Status />} />
              <Route path="faq" element={<FrequentlyAsked />} />
              <Route path="regForm" element={<RegForm />} />
              <Route path="pdf" element={<VaccineInfo />} />
              <Route path="appointment" element={<DoctorsAppointment />} />
              <Route path="userAppointments" element={<UserAppointments />} />
            </Route>

            {/* EVENT RELATED ROUTES */}
            <Route path="events" element={<Events />}>
              <Route path="all-events" element={<AllEvents />} />
              <Route path="upcoming-events" element={<UpcomingEvents />} />
              <Route path="archived-events" element={<ArchivedEvents />} />
            </Route>
            <Route path="eventDetails/:id" element={<EventDetails />} />

            {/* DEVELOPMENT RELATED ROUTES */}
            <Route path="development" element={<Development />} />

            {/* NEWS RELATED ROUTES */}
            <Route path="newsDetails/:id" element={<NewsDetails />} />
            <Route path="allNews" element={<AllNews />} />

            {/* DONATION RELATED ROUTES */}
            <Route path="donation" element={<Donations />} />
            <Route path="causedetails/:id" element={<SingleCauseDetail />} />

            {/* VILLAGE MARKET RELATED ROUTES */}
            <Route path="e-market" element={<EMarket />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="confirmpay" element={<ConfirmPayment />} />
            <Route
              path="productdetails/:id/:item"
              element={<ProductDetails />}
            />
            <Route path="medicinestore" element={<MedicineShop />} />
            <Route path="marketdashboard" element={<MarketDashboard />}>
              <Route path="myorder" element={<MyOrder />} />
            </Route>

            {/* Admin dashboard routes */}
            {/* landing page of medical */}
            <Route path="medical" element={<Medical />} />

            {/* Social Media Routes */}
            <Route path="social" element={<SocialHome />} />
            <Route path="connection" element={<ConnectionBoard />}>
              <Route path="home" element={<BoardHome />} />
              <Route path="addFriend" element={<AddFriend />} />
              <Route path="requesting" element={<Requesting />} />
              <Route path="requested" element={<Requested />} />
            </Route>
          </Route>

          {/* Admin dashboard routes */}
          <Route element={<AdminRoute allowedRoles={[Roles.Admin]} />}>
            <Route path="admin" element={<AdminDashboard />}>
              <Route path="home" element={<AdminHome />} />
              <Route path="allusers" element={<AllUsers />} />
              <Route path="sendNotification" element={<SendNotification />} />
              <Route path="add-events" element={<AddEvents />} />
              <Route path="manageEvents" element={<ManageEvents />} />
              <Route path="market" element={<MarketManagement />} />
              <Route path="addcause" element={<AddCause />} />
              <Route path="allcauses" element={<AllCauses />} />
              <Route path="updatecause/:id" element={<UpdateCause />} />
              <Route path="manageAllDonors" element={<ManageAllDonors />} />
              <Route path="development" element={<DevelopmentDashboard />} />
              <Route
                path="manageDevelopmentProposals"
                element={<ManageDevelopmentProposals />}
              />
              <Route path="editDevelopment/:id" element={<EditBlog />} />
              <Route path="market" element={<MarketManagement />} />
              <Route path="add-events" element={<AddEvents />} />
              <Route path="manageNews" element={<ManageNews />} />
              <Route path="addNews" element={<AddNews />} />
              <Route path="editNews/:id" element={<EditNews />} />
              <Route path="addAppointment" element={<AddAppointment />} />
              <Route path="status" element={<StatusCheck />} />
              <Route path="allHelpRequests" element={<AllHelpRequests />} />
            </Route>
          </Route>

          {/* unauthorized route */}
          <Route path="unauthorized" element={<UnAuthorized />} />

          {/* NOT FOUND ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
