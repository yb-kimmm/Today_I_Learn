import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Foot: () => import('../../components/Foot.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c)),
  GNB: () => import('../../components/GNB.vue' /* webpackChunkName: "components/g-n-b" */).then(c => wrapFunctional(c.default || c)),
  GlobalArticleCard: () => import('../../components/GlobalArticleCard.vue' /* webpackChunkName: "components/global-article-card" */).then(c => wrapFunctional(c.default || c)),
  Searchbar: () => import('../../components/Searchbar.vue' /* webpackChunkName: "components/searchbar" */).then(c => wrapFunctional(c.default || c)),
  ArticleBreadcrumb: () => import('../../components/Article/Breadcrumb.vue' /* webpackChunkName: "components/article-breadcrumb" */).then(c => wrapFunctional(c.default || c)),
  ArticleCommentCard: () => import('../../components/Article/CommentCard.vue' /* webpackChunkName: "components/article-comment-card" */).then(c => wrapFunctional(c.default || c)),
  ArticleCommentList: () => import('../../components/Article/CommentList.vue' /* webpackChunkName: "components/article-comment-list" */).then(c => wrapFunctional(c.default || c)),
  ArticleContentCard: () => import('../../components/Article/ContentCard.vue' /* webpackChunkName: "components/article-content-card" */).then(c => wrapFunctional(c.default || c)),
  ArticleInputComment: () => import('../../components/Article/InputComment.vue' /* webpackChunkName: "components/article-input-comment" */).then(c => wrapFunctional(c.default || c)),
  ArticleInputReply: () => import('../../components/Article/InputReply.vue' /* webpackChunkName: "components/article-input-reply" */).then(c => wrapFunctional(c.default || c)),
  ArticleRecommendArticleList: () => import('../../components/Article/RecommendArticleList.vue' /* webpackChunkName: "components/article-recommend-article-list" */).then(c => wrapFunctional(c.default || c)),
  ArticleReplyCard: () => import('../../components/Article/ReplyCard.vue' /* webpackChunkName: "components/article-reply-card" */).then(c => wrapFunctional(c.default || c)),
  CompanyCard: () => import('../../components/CompanyReview/CompanyCard.vue' /* webpackChunkName: "components/company-card" */).then(c => wrapFunctional(c.default || c)),
  CompanyReviewHeroSection: () => import('../../components/CompanyReview/HeroSection.vue' /* webpackChunkName: "components/company-review-hero-section" */).then(c => wrapFunctional(c.default || c)),
  CompanyReviewSection: () => import('../../components/CompanyReview/ReviewSection.vue' /* webpackChunkName: "components/company-review-section" */).then(c => wrapFunctional(c.default || c)),
  GNBSmallSearchbar: () => import('../../components/GNB/SmallSearchbar.vue' /* webpackChunkName: "components/g-n-b-small-searchbar" */).then(c => wrapFunctional(c.default || c)),
  MainBestBoardCard: () => import('../../components/Main/BestBoardCard.vue' /* webpackChunkName: "components/main-best-board-card" */).then(c => wrapFunctional(c.default || c)),
  MainBoardCard: () => import('../../components/Main/BoardCard.vue' /* webpackChunkName: "components/main-board-card" */).then(c => wrapFunctional(c.default || c)),
  MainRealtimeFamousCompany: () => import('../../components/Main/RealtimeFamousCompany.vue' /* webpackChunkName: "components/main-realtime-famous-company" */).then(c => wrapFunctional(c.default || c)),
  ModalConfirm: () => import('../../components/Modal/Confirm.vue' /* webpackChunkName: "components/modal-confirm" */).then(c => wrapFunctional(c.default || c)),
  ModalLogin: () => import('../../components/Modal/Login.vue' /* webpackChunkName: "components/modal-login" */).then(c => wrapFunctional(c.default || c)),
  ModalLoginAndRegister: () => import('../../components/Modal/LoginAndRegister.vue' /* webpackChunkName: "components/modal-login-and-register" */).then(c => wrapFunctional(c.default || c)),
  ModalRegister: () => import('../../components/Modal/Register.vue' /* webpackChunkName: "components/modal-register" */).then(c => wrapFunctional(c.default || c)),
  ModalWriting: () => import('../../components/Modal/Writing.vue' /* webpackChunkName: "components/modal-writing" */).then(c => wrapFunctional(c.default || c)),
  SearchResultCompanyInfoCard: () => import('../../components/SearchResult/CompanyInfoCard.vue' /* webpackChunkName: "components/search-result-company-info-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
