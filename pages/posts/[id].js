import Layout from '../../components/layout';
import { getAllPostsIds, getPostsData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostsData(params.id)
    return {
        props: {
            postData
        }
    };
};

export async function getStaticPaths() {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false
    };
};

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
        </Layout>
    )
};