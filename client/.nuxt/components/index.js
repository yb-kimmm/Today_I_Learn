export { default as Foot } from '../../components/Foot.vue'
export { default as GNB } from '../../components/GNB.vue'
export { default as GlobalArticleCard } from '../../components/GlobalArticleCard.vue'
export { default as Searchbar } from '../../components/Searchbar.vue'
export { default as CompanyCard } from '../../components/CompanyReview/CompanyCard.vue'
export { default as CompanyReviewHeroSection } from '../../components/CompanyReview/HeroSection.vue'
export { default as CompanyReviewSection } from '../../components/CompanyReview/ReviewSection.vue'
export { default as ArticleBreadcrumb } from '../../components/Article/Breadcrumb.vue'
export { default as ArticleCommentCard } from '../../components/Article/CommentCard.vue'
export { default as ArticleCommentList } from '../../components/Article/CommentList.vue'
export { default as ArticleContentCard } from '../../components/Article/ContentCard.vue'
export { default as ArticleInputComment } from '../../components/Article/InputComment.vue'
export { default as ArticleInputReply } from '../../components/Article/InputReply.vue'
export { default as ArticleRecommendArticleList } from '../../components/Article/RecommendArticleList.vue'
export { default as ArticleReplyCard } from '../../components/Article/ReplyCard.vue'
export { default as GNBSmallSearchbar } from '../../components/GNB/SmallSearchbar.vue'
export { default as MainBestBoardCard } from '../../components/Main/BestBoardCard.vue'
export { default as MainBoardCard } from '../../components/Main/BoardCard.vue'
export { default as MainRealtimeFamousCompany } from '../../components/Main/RealtimeFamousCompany.vue'
export { default as ModalConfirm } from '../../components/Modal/Confirm.vue'
export { default as ModalLogin } from '../../components/Modal/Login.vue'
export { default as ModalLoginAndRegister } from '../../components/Modal/LoginAndRegister.vue'
export { default as ModalRegister } from '../../components/Modal/Register.vue'
export { default as ModalWriting } from '../../components/Modal/Writing.vue'
export { default as SearchResultCompanyInfoCard } from '../../components/SearchResult/CompanyInfoCard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
