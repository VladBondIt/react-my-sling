import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        className="shop__card card"
        speed={2}
        viewBox="0 0 320 532"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="20" ry="20" width="315" height="530" />
    </ContentLoader>
)

export default Loader

