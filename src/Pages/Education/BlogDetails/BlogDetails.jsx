import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios, { BASE_URI } from '../../../api/axios';
import Comments from '../DetailVideo/Comments/Comments';
import BlogSideCard from '../Teacher/BlogSideCard/BlogSideCard';

const blogs = [
  {
    _id: '1',
    author: 'user 1',
    email: 'user1@gmail.com',
    title: 'Microsoft word',
    bannerImg: {
      path: 'https://www.versionmuseum.com/images/applications/microsoft-word/microsoft-word%5E2015%5Ems-word-logo-new.png',
    },
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque officia maiores quia. Nesciunt molestias doloribus explicabo deserunt quia eligendi itaque odit doloremque atque, obcaecati esse voluptate alias ipsa nihil a quasi inventore quae accusantium deleniti laboriosam cum aperiam sed? Blanditiis odit ipsa ratione eligendi quam consequatur, exercitationem sint placeat! Enim ducimus debitis nisi, voluptatum recusandae error, odio accusantium sapiente, laudantium nostrum praesentium illum magnam mollitia quas ex tempora hic modi in. Facilis aut et obcaecati eveniet explicabo eos aliquam, cupiditate omnis ex recusandae eligendi! Dolorem eaque ipsam vero. Amet doloremque veniam minima, quis distinctio eius ullam, officia aut odio dignissimos facere ad explicabo doloribus natus expedita, suscipit dolores consectetur repudiandae vel eaque est eveniet maxime illo et. Natus molestiae eius neque est labore, adipisci earum iste culpa ex nihil aperiam similique atque nulla fugiat ratione aliquid! Natus dignissimos unde libero perferendis veritatis atque dolores dolor eius consequuntur ipsum voluptate laudantium, modi minima? At enim dicta amet et iure quaerat architecto dolorem alias eos quis tenetur dignissimos blanditiis non similique libero, dolores obcaecati est! Laboriosam accusantium incidunt odio nihil facere accusamus similique officia? Obcaecati totam in repellat inventore quo blanditiis voluptatibus temporibus tenetur, quod neque nobis odio assumenda sint consectetur debitis optio error? Pariatur inventore voluptatum similique aperiam, necessitatibus ipsam eum corporis esse asperiores nemo! Eum distinctio architecto corporis excepturi alias deserunt similique quidem! Blanditiis cumque vitae nesciunt enim eaque quisquam, veniam expedita, commodi nemo quae aliquid inventore ab deleniti iste aspernatur voluptatem ipsam neque ipsa. Quasi eaque voluptate quisquam natus fugiat maxime, beatae, inventore dolor voluptas id autem quia nesciunt, excepturi iusto quis ab eligendi a? Et cumque eaque ratione dolore dolorem, debitis asperiores expedita possimus id ullam tempora optio nam nostrum veritatis nihil delectus quisquam esse sint repudiandae quibusdam beatae harum! Nihil incidunt nesciunt quibusdam aliquid, ipsam odio.',
    tags: ['beginner', 'microsft-word', 'writing'],
    publishDate: '2/2/2022',
    rating: 3,
  },
  {
    _id: '2',
    author: 'user 2',
    email: 'user2@gmail.com',
    title: 'Marchendising',
    bannerImg: {
      path: 'https://static.fibre2fashion.com/articleresources/images/51/5070/differentiating-edge-merchandising-as-centre-of-excellence.jpg',
    },
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque officia maiores quia. Nesciunt molestias doloribus explicabo deserunt quia eligendi itaque odit doloremque atque, obcaecati esse voluptate alias ipsa nihil a quasi inventore quae accusantium deleniti laboriosam cum aperiam sed? Blanditiis odit ipsa ratione eligendi quam consequatur, exercitationem sint placeat! Enim ducimus debitis nisi, voluptatum recusandae error, odio accusantium sapiente, laudantium nostrum praesentium illum magnam mollitia quas ex tempora hic modi in. Facilis aut et obcaecati eveniet explicabo eos aliquam, cupiditate omnis ex recusandae eligendi! Dolorem eaque ipsam vero. Amet doloremque veniam minima, quis distinctio eius ullam, officia aut odio dignissimos facere ad explicabo doloribus natus expedita, suscipit dolores consectetur repudiandae vel eaque est eveniet maxime illo et. Natus molestiae eius neque est labore, adipisci earum iste culpa ex nihil aperiam similique atque nulla fugiat ratione aliquid! Natus dignissimos unde libero perferendis veritatis atque dolores dolor eius consequuntur ipsum voluptate laudantium, modi minima? At enim dicta amet et iure quaerat architecto dolorem alias eos quis tenetur dignissimos blanditiis non similique libero, dolores obcaecati est! Laboriosam accusantium incidunt odio nihil facere accusamus similique officia? Obcaecati totam in repellat inventore quo blanditiis voluptatibus temporibus tenetur, quod neque nobis odio assumenda sint consectetur debitis optio error? Pariatur inventore voluptatum similique aperiam, necessitatibus ipsam eum corporis esse asperiores nemo! Eum distinctio architecto corporis excepturi alias deserunt similique quidem! Blanditiis cumque vitae nesciunt enim eaque quisquam, veniam expedita, commodi nemo quae aliquid inventore ab deleniti iste aspernatur voluptatem ipsam neque ipsa. Quasi eaque voluptate quisquam natus fugiat maxime, beatae, inventore dolor voluptas id autem quia nesciunt, excepturi iusto quis ab eligendi a? Et cumque eaque ratione dolore dolorem, debitis asperiores expedita possimus id ullam tempora optio nam nostrum veritatis nihil delectus quisquam esse sint repudiandae quibusdam beatae harum! Nihil incidunt nesciunt quibusdam aliquid, ipsam odio.',
    tags: ['beginner', 'microsft-word', 'writing'],
    publishDate: '2/2/2022',
    rating: 3,
  },
  {
    _id: '3',
    author: 'user 3',
    email: 'user3@gmail.com',
    title: 'Microsoft excel',
    bannerImg: {
      path: 'https://leverageedu.com/blog/wp-content/uploads/2020/06/Types-of-Digital-Marketing.png',
    },
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque officia maiores quia. Nesciunt molestias doloribus explicabo deserunt quia eligendi itaque odit doloremque atque, obcaecati esse voluptate alias ipsa nihil a quasi inventore quae accusantium deleniti laboriosam cum aperiam sed? Blanditiis odit ipsa ratione eligendi quam consequatur, exercitationem sint placeat! Enim ducimus debitis nisi, voluptatum recusandae error, odio accusantium sapiente, laudantium nostrum praesentium illum magnam mollitia quas ex tempora hic modi in. Facilis aut et obcaecati eveniet explicabo eos aliquam, cupiditate omnis ex recusandae eligendi! Dolorem eaque ipsam vero. Amet doloremque veniam minima, quis distinctio eius ullam, officia aut odio dignissimos facere ad explicabo doloribus natus expedita, suscipit dolores consectetur repudiandae vel eaque est eveniet maxime illo et. Natus molestiae eius neque est labore, adipisci earum iste culpa ex nihil aperiam similique atque nulla fugiat ratione aliquid! Natus dignissimos unde libero perferendis veritatis atque dolores dolor eius consequuntur ipsum voluptate laudantium, modi minima? At enim dicta amet et iure quaerat architecto dolorem alias eos quis tenetur dignissimos blanditiis non similique libero, dolores obcaecati est! Laboriosam accusantium incidunt odio nihil facere accusamus similique officia? Obcaecati totam in repellat inventore quo blanditiis voluptatibus temporibus tenetur, quod neque nobis odio assumenda sint consectetur debitis optio error? Pariatur inventore voluptatum similique aperiam, necessitatibus ipsam eum corporis esse asperiores nemo! Eum distinctio architecto corporis excepturi alias deserunt similique quidem! Blanditiis cumque vitae nesciunt enim eaque quisquam, veniam expedita, commodi nemo quae aliquid inventore ab deleniti iste aspernatur voluptatem ipsam neque ipsa. Quasi eaque voluptate quisquam natus fugiat maxime, beatae, inventore dolor voluptas id autem quia nesciunt, excepturi iusto quis ab eligendi a? Et cumque eaque ratione dolore dolorem, debitis asperiores expedita possimus id ullam tempora optio nam nostrum veritatis nihil delectus quisquam esse sint repudiandae quibusdam beatae harum! Nihil incidunt nesciunt quibusdam aliquid, ipsam odio.',
    tags: ['beginner', 'microsft-word', 'writing'],
    publishDate: '2/2/2022',
    rating: 3,
  },
];

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = useSelector((state) => state.blogs.blogs);
  const blog = blogs.filter((blog) => blog._id === id)[0];

  const [commentLists, setCommentLists] = useState([]);

  const updateComment = (newComment) => {
    setCommentLists([...commentLists, newComment]);
  };

  useEffect(() => {
    axios.get(`/comment/all/?id=${id}`).then((response) => {
      if (response.data.success) {
        setCommentLists(response.data.comments);
      } else {
        alert('Failed to get blog Info');
      }
    });
  }, [id]);

  return (
    <div
      className="mt-[100px] lg:flex "
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="col-span-5 lg:w-4/5 space-y-6 lg:px-12 my-20 px-3">
        <div>
          <img
            src={`${BASE_URI}/${blog?.bannerImg?.path}`}
            alt={blog?.title}
            className="w-full lg:w-full lg:h-[70vh] h-[200px]"
          />
        </div>
        <div className='dark:text-dark_text'>Authored by {blog?.author}</div>
        <div className='dark:text-dark_text'>author Email: {blog?.email}</div>
        <div className="flex gap-4 items-center">
          {blog?.tags.map((tag) => (
            <div key={tag} className="bg-emerald-500 p-2 text-white">
              #{tag}
            </div>
          ))}
        </div>
        <p className="">{parse(blog?.content)}</p>
        <div>
          <Comments
            postId={id}
            updateComment={updateComment}
            commentLists={commentLists}
          />
        </div>
      </div>

      <div className="flex-1 mt-6 lg:my-20 mx-5 lg:mx-0 mb-10">
        <div className="space-y-6">
          <h3>Featured Blogs</h3>
          {blogs?.map((blog) => (
            <BlogSideCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
