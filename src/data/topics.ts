import type { ImageMetadata } from 'astro';

import god from '../assets/topics/god.gif';
import gospel from '../assets/topics/gospel-alt.jpg';
import afterlife from '../assets/topics/afterlife.png';
import worth from '../assets/topics/worth.png';
import beauty from '../assets/topics/beauty.png';
import fear from '../assets/topics/fear.webp';
import depression from '../assets/topics/depression.png';
import peace from '../assets/topics/peace.jpg';
import self from '../assets/topics/self.png';
import freedom from '../assets/topics/freedom.png';
import light from '../assets/topics/light.avif';
import christInSelf from '../assets/topics/christ-in-self.png';
import selfControl from '../assets/topics/self-control.png';
import repentance from '../assets/topics/repentance.jpg';
import forgiveness from '../assets/topics/forgiveness.png';
import joy from '../assets/topics/joy.png';
import love from '../assets/topics/love.png';
import faith from '../assets/topics/faith.png';
import hope from '../assets/topics/hope.png';
import wisdom from '../assets/topics/wisdom.png';
import gentleness from '../assets/topics/gentleness.png';
import goodness from '../assets/topics/goodness.png';
import sexuality from '../assets/topics/sexuality.png';
import humility from '../assets/topics/humility.png';
import kindness from '../assets/topics/kindness.png';
import heaven from '../assets/topics/heaven.png';
import hell from '../assets/topics/Hell.webp';
import patience from '../assets/topics/patience.png';

export interface Topic {
  slug: string;
  title: string;
  description: string;
  image: ImageMetadata;
  /** Animated images (gif) must skip optimization to keep their animation. */
  animated?: boolean;
}

/** Topics shown on the homepage grid, in display order. */
export const gridTopics: Topic[] = [
  {
    slug: 'god',
    title: 'God',
    description:
      'Who is God? Explore what the Bible says about the creator and ruler of the universe — the Alpha and Omega, Spirit, Light, Love, and the sole supreme Being.',
    image: god,
    animated: true,
  },
  {
    slug: 'gospel',
    title: 'Gospel',
    description:
      'The Gospel means good news. Discover the bad news that currently is — and the good news of what God has done for you through Jesus Christ.',
    image: gospel,
  },
  {
    slug: 'afterlife',
    title: 'Afterlife',
    description:
      'Your eternal destiny after death. What does the Bible say about what comes next — and which destination will you choose?',
    image: afterlife,
  },
  {
    slug: 'self-worth',
    title: 'Self Worth',
    description:
      'Where does my worth come from? Not strength, beauty, or money — discover the unshakable worth declared over you by your Creator.',
    image: worth,
  },
  {
    slug: 'beauty',
    title: 'Beauty',
    description:
      'Why do we want to be beautiful? Explore what the Bible says about beauty, praise, and the unfading beauty that God values.',
    image: beauty,
  },
  {
    slug: 'fear',
    title: 'Fear',
    description:
      'Fear touches all of our lives and cripples us from taking the higher road. Find the remedy for fear in the promises of God.',
    image: fear,
  },
  {
    slug: 'depression',
    title: 'Depression',
    description:
      'Why, my soul, are you downcast? Honest Bible verses and meditations for those walking through depression — and the hope that answers it.',
    image: depression,
  },
  {
    slug: 'peace',
    title: 'Peace',
    description:
      'Peace is not the absence of trouble but calm in the midst of it. Discover the peace of God that transcends all understanding.',
    image: peace,
  },
  {
    slug: 'self',
    title: 'Self',
    description:
      "A person's essential being that distinguishes them from others. What does the Bible say about who you really are?",
    image: self,
  },
  {
    slug: 'freedom',
    title: 'Freedom',
    description:
      'Freedom from what? Discover what has mastered you — and how the truth of Jesus Christ sets people free indeed.',
    image: freedom,
  },
  {
    slug: 'light',
    title: 'Light',
    description:
      'God is light; in Him there is no darkness at all. Bible verses on the light that has come into the world.',
    image: light,
  },
  {
    slug: 'christ-in-self',
    title: 'Christ in Self',
    description:
      'If anyone is in Christ, he is a new creation. Explore what it means for Christ to live in you.',
    image: christInSelf,
  },
  {
    slug: 'self-control',
    title: 'Self Control',
    description:
      'A man without self-control is like a city broken into and left without walls. What the Bible says about mastering your desires.',
    image: selfControl,
  },
  {
    slug: 'repentance',
    title: 'Repentance',
    description:
      'Repentance is refreshment — remorse over sin that produces a profound change of heart, mind, and actions toward a God-honoring life.',
    image: repentance,
  },
  {
    slug: 'forgiveness',
    title: 'Forgiveness',
    description:
      'Forgiveness releases anger and resentment toward those who caused you harm. Discover the forgiveness God offers and asks of us.',
    image: forgiveness,
  },
  {
    slug: 'joy',
    title: 'Joy',
    description:
      'Joy is greater than happiness. The joy of the Lord is your strength — and no one can take it away.',
    image: joy,
  },
  {
    slug: 'love',
    title: 'Love',
    description:
      'Love is patient, love is kind. Explore 1 Corinthians 13 and the greatest love of all — God laying down His life for His friends.',
    image: love,
  },
  {
    slug: 'faith',
    title: 'Faith',
    description:
      'Faith is confidence in what we hope for and assurance about what we do not see. By grace you have been saved through faith.',
    image: faith,
  },
  {
    slug: 'hope',
    title: 'Hope',
    description:
      'Eager expectation of future goodness. The people walking in darkness have seen a great light — find a living hope that holds you.',
    image: hope,
  },
  {
    slug: 'wisdom',
    title: 'Wisdom',
    description:
      'The fear of the Lord is the beginning of wisdom. Where shall wisdom be found, and what is its price?',
    image: wisdom,
  },
  {
    slug: 'gentleness',
    title: 'Gentleness',
    description:
      'A strong hand with a soft touch. A gentle answer turns away wrath — learn from the One who is gentle and humble in heart.',
    image: gentleness,
  },
  {
    slug: 'goodness',
    title: 'Goodness',
    description:
      'No one is good except God alone. Everything God is, everything God has, and everything God desires for us to experience.',
    image: goodness,
  },
  {
    slug: 'sexuality',
    title: 'Sexuality',
    description:
      'In a world full of differing opinions about sexuality, God makes His own clear. Stop looking for love in sex — look for love in Love.',
    image: sexuality,
  },
  {
    slug: 'humility',
    title: 'Humility',
    description:
      'In humility count others more significant than yourselves. Christ humbled himself — and God exalted him above every name.',
    image: humility,
  },
  {
    slug: 'kindness',
    title: 'Kindness',
    description:
      'I have drawn you with unfailing kindness. When the kindness and love of God our Savior appeared, he saved us.',
    image: kindness,
  },
];

/** Pages that exist outside the homepage grid (reached from other topics). */
export const extraTopics: Topic[] = [
  {
    slug: 'heaven',
    title: 'Heaven',
    description:
      "A Christian's eternal home with Christ. Before you read of heaven's beauty and glories, understand that heaven is not for everyone.",
    image: heaven,
  },
  {
    slug: 'hell',
    title: 'Hell',
    description: 'What does the Bible say about hell? The eternal agony of damnation — and the escape God offers.',
    image: hell,
  },
  {
    slug: 'invitation',
    title: 'Invitation',
    description:
      'Everyone who calls on the name of the Lord will be saved. Your invitation to eternal life — and how to RSVP.',
    image: heaven,
  },
  {
    slug: 'patience',
    title: 'Patience',
    description: 'What does the Bible say about patience?',
    image: patience,
  },
];

export const allTopics: Topic[] = [...gridTopics, ...extraTopics];

export function getTopic(slug: string): Topic {
  const topic = allTopics.find((t) => t.slug === slug);
  if (!topic) throw new Error(`Unknown topic slug: ${slug}`);
  return topic;
}

/** Previous/next neighbours within the homepage grid order. */
export function getNeighbours(slug: string): { prev?: Topic; next?: Topic } {
  const i = gridTopics.findIndex((t) => t.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? gridTopics[i - 1] : undefined,
    next: i < gridTopics.length - 1 ? gridTopics[i + 1] : undefined,
  };
}
