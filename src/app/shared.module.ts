import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// tslint:disable-next-line:max-line-length
import { faAngry as farAngry, faArrowAltCircleDown, faArrowAltCircleLeft, faCalendar, faCalendarCheck, faCircle, faClock, faClone, faComment, faCommentAlt as farCommentAlt, faCopy, faCheckSquare as farCheckSquare, faEdit, faFileExcel, faEye, faFile, faFileWord, faFolder, faFolderOpen, faFrown as farFrown, faFrownOpen as farFrownOpen, faGrin as farGrin, faGrinStars, faHeart, faHourglass, faIdBadge as farIdBadge, faIdCard as farIdCard, faLaugh as farLaugh, faLifeRing, faLightbulb, faListAlt, faMeh as farMeh, faNewspaper, faQuestionCircle, faSmile as farSmile, faSmileWink as farSmileWink, faSquare, faStar as farStar, faThumbsDown as farThumbsDown, faThumbsUp as farThumbsUp, faTrashAlt, faUser, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

// tslint:disable-next-line:max-line-length
import { faAngry as fasAngry, faAngleRight, faArchive, faArrowLeft, faAtlas, faBackward, faBan, faBars, faBook, faBookMedical, faBug, faBullhorn, faChartPie, faChartArea, faChartBar, faChartLine, faCheckSquare as fasCheckSquare, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCheck, faChild, faClipboardCheck, faCloudUploadAlt, faCodeBranch, faCommentAlt as fasCommentAlt, faCube, faCubes, faDirections, faDna, faDownload, faExclamationCircle, faExclamationTriangle, faExternalLinkAlt, faExternalLinkSquareAlt, faFilter, faFlagCheckered, faCog, faFingerprint, faFrown as fasFrown, faFrownOpen as fasFrownOpen, faGrin as fasGrin, faHashtag, faHistory, faHome, faHourglassHalf, faIdBadge as fasIdBadge, faIdCard as fasIdCard, faInbox, faLaugh as fasLaugh, faLuggageCart, faLayerGroup, faKey, faLink, faList, faLock, faMask, faMeh as fasMeh, faMicrochip, faPenFancy, faPaintRoller, faPaperPlane, faPencilAlt, faPlus, faPowerOff, faProjectDiagram, faPuzzlePiece, faRobot, faSave, faSignInAlt, faSignOutAlt, faStar as fasStar, faSync, faSyncAlt, faSearch, faShareAlt, faShieldAlt, faSitemap, faSlidersH, faSmile as fasSmile, faSmileWink as fasSmileWink, faSpinner, faStepForward, faStroopwafel, faTable, faTags, faTasks, faTicketAlt, faTimes, faThumbsDown as fasThumbsDown, faThumbsUp as fasThumbsUp, faToolbox, faTools, faToggleOn, faToggleOff, faTrafficLight, faTruck, faUndo, faUnlock, faUserCheck, faUserCircle, faUserLock, faUsers, faUserPlus, faUserSecret, faUserShield, faUserTimes, faMapSigns } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [
  ],
  providers: [
  ]

})
export class SharedModule {
  constructor(library: FaIconLibrary) {

    // tslint:disable-next-line:max-line-length
    library.addIcons(faAngleRight, faArchive, faArrowLeft, faArrowAltCircleDown, faArrowAltCircleLeft, faAtlas, faBackward, faBan, faBars, faBook, faBookMedical, faBug, faBullhorn, faCalendar, faCalendarCheck, faChartPie, faChartBar, faChartArea, faChartLine, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCheck, farCheckSquare, fasCheckSquare, faCircle, faClock, faClone, faClipboardCheck, faComment, faCopy, faCloudUploadAlt, faDirections, faEdit, faExclamationCircle, faExclamationTriangle, faExternalLinkAlt, faExternalLinkSquareAlt, faEye, faFilter, faFile, faFileWord, faFlagCheckered, faFolder, faFolderOpen, faGrinStars, faCog, faHeart, faHashtag, faHistory, faHome, faHourglass, faHourglassHalf, farIdBadge, fasIdBadge, farIdCard, fasIdCard, faInbox, faKey, faLifeRing, faLink, faList, faLock, faLightbulb, faListAlt, faLuggageCart, faNewspaper, faPaintRoller, faPenFancy, faPencilAlt, faPlus, faPowerOff, faProjectDiagram, faPuzzlePiece, faQuestionCircle, faSave, faSync, faSearch, faShieldAlt, faSignInAlt, faSignOutAlt, faSitemap, faSlidersH, faSpinner, faSquare, faTable, faTags, faTasks, faTicketAlt, faTimes, faToolbox, faTools, faToggleOn, faToggleOff, farStar, fasStar, faTrashAlt, faTruck, faUndo, faUnlock, faUser, faUserLock, faUserCircle, faUsers, faUserPlus, faUserTimes, farCommentAlt, farFrown, farFrownOpen, farGrin, farMeh, fasMeh, farSmile, farLaugh, farSmileWink, fasCommentAlt, fasFrown, fasFrownOpen, fasCommentAlt, fasGrin, fasLaugh, fasSmile, fasSmileWink, farAngry, fasAngry, farThumbsDown, farThumbsUp, fasThumbsDown, fasThumbsUp, faUserSecret, faStepForward, faPaperPlane, faTrafficLight, faFileExcel, faDownload, faLayerGroup, faShareAlt, faChild, faCodeBranch, faDna, faFingerprint, faRobot, faUserShield, faMicrochip, faCube, faCubes, faStroopwafel, faMapSigns, faEyeSlash, faUserCheck, faSyncAlt, faUserLock, faMask);
  }

}
