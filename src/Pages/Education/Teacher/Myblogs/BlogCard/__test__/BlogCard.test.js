import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogCard from '../BlogCard';

const blog = {
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
};

const MockBlogCard = ({ blog }) => (
  <BrowserRouter>
    <BlogCard blog={blog} />
  </BrowserRouter>
);

it("'Digital Marketing' should be available", () => {
  render(<MockBlogCard blog={blog} />);
  const isAvailable = screen.getByText(/Microsoft word/i);

  expect(isAvailable).toBeInTheDocument();
});
