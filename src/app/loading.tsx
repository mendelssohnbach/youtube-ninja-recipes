import SkeltonCard from '@/components/SkeltonCard';

export default function loading() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {'abcdefghi'.split('').map((i) => (
          <SkeltonCard key={i} />
        ))}
      </div>
    </main>
  );
}
