import { wrapFunctional } from './utils'

export { default as Foot } from '../../components/Foot.vue'
export { default as GNB } from '../../components/GNB.vue'
export { default as GlobalArticleCard } from '../../components/GlobalArticleCard.vue'
export { default as Searchbar } from '../../components/Searchbar.vue'
export { default as ArticleBreadcrumb } from '../../components/Article/Breadcrumb.vue'
export { default as ArticleCommentCard } from '../../components/Article/CommentCard.vue'
export { default as ArticleCommentList } from '../../components/Article/CommentList.vue'
export { default as ArticleContentCard } from '../../components/Article/ContentCard.vue'
export { default as ArticleInputComment } from '../../components/Article/InputComment.vue'
export { default as ArticleInputReply } from '../../components/Article/InputReply.vue'
export { default as ArticleRecommendArticleList } from '../../components/Article/RecommendArticleList.vue'
export { default as ArticleReplyCard } from '../../components/Article/ReplyCard.vue'
export { default as CompanyCard } from '../../components/CompanyReview/CompanyCard.vue'
export { default as CompanyReviewHeroSection } from '../../components/CompanyReview/HeroSection.vue'
export { default as CompanyReviewSection } from '../../components/CompanyReview/ReviewSection.vue'
export { default as GNBSmallSearchbar } from '../../components/GNB/SmallSearchbar.vue'
export { default as SearchResultCompanyInfoCard } from '../../components/SearchResult/CompanyInfoCard.vue'
export { default as ModalConfirm } from '../../components/Modal/Confirm.vue'
export { default as ModalLogin } from '../../components/Modal/Login.vue'
export { default as ModalWriting } from '../../components/Modal/Writing.vue'
export { default as MainBestBoardCard } from '../../components/Main/BestBoardCard.vue'
export { default as MainBoardCard } from '../../components/Main/BoardCard.vue'
export { default as MainRealtimeFamousCompany } from '../../components/Main/RealtimeFamousCompany.vue'

export const LazyFoot = import('../../components/Foot.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const LazyGNB = import('../../components/GNB.vue' /* webpackChunkName: "components/g-n-b" */).then(c => wrapFunctional(c.default || c))
export const LazyGlobalArticleCard = import('../../components/GlobalArticleCard.vue' /* webpackChunkName: "components/global-article-card" */).then(c => wrapFunctional(c.default || c))
export const LazySearchbar = import('../../components/Searchbar.vue' /* webpackChunkName: "components/searchbar" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleBreadcrumb = import('../../components/Article/Breadcrumb.vue' /* webpackChunkName: "components/article-breadcrumb" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleCommentCard = import('../../components/Article/CommentCard.vue' /* webpackChunkName: "components/article-comment-card" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleCommentList = import('../../components/Article/CommentList.vue' /* webpackChunkName: "components/article-comment-list" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleContentCard = import('../../components/Article/ContentCard.vue' /* webpackChunkName: "components/article-content-card" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleInputComment = import('../../components/Article/InputComment.vue' /* webpackChunkName: "components/article-input-comment" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleInputReply = import('../../components/Article/InputReply.vue' /* webpackChunkName: "components/article-input-reply" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleRecommendArticleList = import('../../components/Article/RecommendArticleList.vue' /* webpackChunkName: "components/article-recommend-article-list" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleReplyCard = import('../../components/Article/ReplyCard.vue' /* webpackChunkName: "components/article-reply-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCompanyCard = import('../../components/CompanyReview/CompanyCard.vue' /* webpackChunkName: "components/company-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCompanyReviewHeroSection = import('../../components/CompanyReview/HeroSection.vue' /* webpackChunkName: "components/company-review-hero-section" */).then(c => wrapFunctional(c.default || c))
export const LazyCompanyReviewSection = import('../../components/CompanyReview/ReviewSection.vue' /* webpackChunkName: "components/company-review-section" */).then(c => wrapFunctional(c.default || c))
export const LazyGNBSmallSearchbar = import('../../components/GNB/SmallSearchbar.vue' /* webpackChunkName: "components/g-n-b-small-searchbar" */).then(c => wrapFunctional(c.default || c))
export const LazySearchResultCompanyInfoCard = import('../../components/SearchResult/CompanyInfoCard.vue' /* webpackChunkName: "components/search-result-company-info-card" */).then(c => wrapFunctional(c.default || c))
export const LazyModalConfirm = import('../../components/Modal/Confirm.vue' /* webpackChunkName: "components/modal-confirm" */).then(c => wrapFunctional(c.default || c))
export const LazyModalLogin = import('../../components/Modal/Login.vue' /* webpackChunkName: "components/modal-login" */).then(c => wrapFunctional(c.default || c))
export const LazyModalWriting = import('../../components/Modal/Writing.vue' /* webpackChunkName: "components/modal-writing" */).then(c => wrapFunctional(c.default || c))
export const LazyMainBestBoardCard = import('../../components/Main/BestBoardCard.vue' /* webpackChunkName: "components/main-best-board-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMainBoardCard = import('../../components/Main/BoardCard.vue' /* webpackChunkName: "components/main-board-card" */).then(c => wrapFunctional(c.default || c))
export const LazyMainRealtimeFamousCompany = import('../../components/Main/RealtimeFamousCompany.vue' /* webpackChunkName: "components/main-realtime-famous-company" */).then(c => wrapFunctional(c.default || c))
