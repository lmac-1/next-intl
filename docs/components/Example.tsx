import useLocationHash from 'hooks/useLocationHash';
import Chip from './Chip';

type Props = {
  demoLink?: string;
  sourceLink: string;
  hash: string;
  name: string;
  description: string;
  featured?: boolean;
};

export default function Example({
  demoLink,
  description,
  featured,
  hash,
  name,
  sourceLink
}: Props) {
  const locationHash = useLocationHash();
  const isActive = locationHash === hash;

  return (
    <div className="relative py-2">
      {isActive && (
        <div className="absolute -left-6 top-0 h-full w-1 bg-sky-200 dark:bg-sky-900" />
      )}
      <h2
        className="flex scroll-mt-8 items-center text-xl font-semibold"
        id={hash}
      >
        {name}
        {featured && <Chip className="ml-3">Featured</Chip>}
      </h2>
      <div className="mt-2">
        <p className="mt-2 max-w-lg text-base text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div className="mt-2">
          <a
            className="nx-text-primary-600 inline-block text-base underline"
            href={sourceLink}
            rel="noreferrer"
            target="_blank"
          >
            Source
          </a>
          {demoLink && (
            <>
              <span className="inline-block text-base text-slate-500">
                {' ・ '}
              </span>
              <a
                className="nx-text-primary-600 inline-block text-base underline"
                href={demoLink}
                rel="noreferrer"
                target="_blank"
              >
                Demo
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
