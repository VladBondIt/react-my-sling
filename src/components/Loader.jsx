import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={320}
        height={532}
        viewBox="0 0 320 532"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="20" ry="20" width="319" height="531" />
        <rect x="10" y="10" rx="20" ry="20" width="319" height="531" />
        <rect x="20" y="20" rx="20" ry="20" width="319" height="531" />
    </ContentLoader>
)

export default Loader

