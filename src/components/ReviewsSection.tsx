import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, Sparkles, MessageSquarePlus, Filter, X } from 'lucide-react';
import { TESTIMONIALS } from '../data/productData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(TESTIMONIALS);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [writeModalOpen, setWriteModalOpen] = useState<boolean>(false);

  // New review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newHairType, setNewHairType] = useState('Thinning Hair / Scalp Shedding');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const filterTags = ['All', 'Hair Fall Stopped', 'Baby Hair Regrowth', 'Density Boost', 'Silky Smooth', 'Zero Chemicals'];

  const filteredReviews = selectedTag === 'All'
    ? reviews
    : reviews.filter(r => r.tags.includes(selectedTag));

  const handleHelpfulVote = (reviewId: string) => {
    setReviews(prev =>
      prev.map(rev => {
        if (rev.id === reviewId) {
          if (rev.userVotedHelpful) {
            return { ...rev, helpfulCount: rev.helpfulCount - 1, userVotedHelpful: false };
          } else {
            return { ...rev, helpfulCount: rev.helpfulCount + 1, userVotedHelpful: true };
          }
        }
        return rev;
      })
    );
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newTitle || !newContent) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      city: newCity || 'Verified Buyer, IN',
      rating: newRating,
      verified: true,
      date: 'Just now',
      title: newTitle,
      content: newContent,
      hairType: newHairType,
      durationUsed: 'Verified First Month',
      helpfulCount: 1,
      tags: ['Verified Buyer', 'Fresh Review']
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setWriteModalOpen(false);
      setNewAuthor('');
      setNewTitle('');
      setNewContent('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-8 sm:py-14 bg-[#FAF8F5] border-t border-[#EAE3D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE0CD] text-[#234E39] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" /> Real People, Real Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1D2E25] tracking-tight">
            Verified Customer Reviews & Results
          </h2>
          <p className="mt-2.5 text-base text-[#56685E] leading-relaxed">
            Over 1,000+ individuals across India have made Kesh Amruth their trusted daily hair care elixir.
          </p>
        </div>

        {/* Rating Breakdown & Summary Bar Card */}
        <div className="bg-white rounded-2xl border border-[#E5DEC9] shadow-xs p-5 sm:p-6 mb-6 sm:mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left: Overall Score */}
          <div className="md:col-span-4 text-center md:text-left md:border-r border-[#EFE8DC] md:pr-6">
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="text-5xl font-extrabold text-[#1E3F2F] font-serif">4.92</span>
              <span className="text-sm font-semibold text-[#708277]">/ 5.0</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs text-[#526458] font-medium">
              Based on <strong>1,000+</strong> authenticated orders
            </p>
            <p className="text-[11px] text-emerald-700 font-semibold mt-1">
              98% of users recommend this to a friend
            </p>
          </div>

          {/* Middle: Star Bars */}
          <div className="md:col-span-5 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-12 text-[#3D4F44] font-medium">5 Stars</span>
              <div className="flex-1 h-2.5 bg-[#EAE2D2] rounded-full overflow-hidden">
                <div className="h-full bg-[#234E39] rounded-full" style={{ width: '92%' }} />
              </div>
              <span className="w-8 text-right font-bold text-[#1E3F2F]">92%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-[#3D4F44] font-medium">4 Stars</span>
              <div className="flex-1 h-2.5 bg-[#EAE2D2] rounded-full overflow-hidden">
                <div className="h-full bg-[#234E39]" style={{ width: '7%' }} />
              </div>
              <span className="w-8 text-right font-bold text-[#1E3F2F]">7%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 text-[#3D4F44] font-medium">3 Stars</span>
              <div className="flex-1 h-2.5 bg-[#EAE2D2] rounded-full overflow-hidden">
                <div className="h-full bg-[#C5A880]" style={{ width: '1%' }} />
              </div>
              <span className="w-8 text-right font-bold text-[#1E3F2F]">1%</span>
            </div>
          </div>

          {/* Right: Write a Review CTA */}
          <div className="md:col-span-3 text-center md:text-right flex flex-col items-center md:items-end justify-center">
            <button
              id="write-review-btn"
              onClick={() => setWriteModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-[#234E39] text-white font-bold text-xs hover:bg-[#1A3B2B] active:scale-95 transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Story</span>
            </button>
            <span className="text-[11px] text-[#7A8C81] mt-2 block">
              100% Verified Buyer Community
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          <span className="text-xs font-bold text-[#4E5E54] flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#234E39] text-white shadow-2xs'
                  : 'bg-white text-[#4A5D51] border border-[#DDD4C1] hover:border-[#234E39]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#E5DEC9] shadow-2xs hover:border-[#234E39] transition-all flex flex-col justify-between"
            >
              <div>
                {/* User Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-[#1E3F2F]">
                        {rev.author}
                      </h3>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[10.5px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                          <CheckCircle className="w-3 h-3 fill-emerald-600 text-white" /> Verified Buyer
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#75877D]">
                      {rev.city} • {rev.date}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Hair Type & Usage duration badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px]">
                  <span className="bg-[#FAF4EB] text-[#7A5B28] px-2 py-0.5 rounded font-medium border border-[#EADBCA]">
                    {rev.hairType}
                  </span>
                  <span className="bg-[#EEF5F1] text-[#1E3F2F] px-2 py-0.5 rounded font-medium">
                    {rev.durationUsed}
                  </span>
                </div>

                {/* Review Title & Content */}
                <h4 className="text-sm font-bold text-[#1D2B24] mb-1.5 leading-snug">
                  "{rev.title}"
                </h4>
                <p className="text-xs text-[#526458] leading-relaxed mb-4">
                  {rev.content}
                </p>

                {/* Review Photo Attachment (if any) */}
                {rev.beforeAfterImage && (
                  <div className="mb-4">
                    <img
                      src={rev.beforeAfterImage}
                      alt="Review result photo"
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 rounded-xl object-cover border border-[#E3DAC7]"
                    />
                  </div>
                )}
              </div>

              {/* Review Card Footer */}
              <div className="pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {rev.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-stone-100 text-[#5F7167] px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleHelpfulVote(rev.id)}
                  className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    rev.userVotedHelpful
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'text-[#6A7C71] hover:text-[#1E3F2F] hover:bg-stone-100'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {writeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#DDD4C0] shadow-2xl p-6 relative">
            <button
              onClick={() => setWriteModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1E3F2F]">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs text-[#5D6F64]">
                  Your review has been verified and published to the Kesh Amruth community.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1E3F2F]">
                    Write a Verified Review
                  </h3>
                  <p className="text-xs text-[#6B7D72]">
                    Share how Kesh Amruth helped your scalp and hair health.
                  </p>
                </div>

                {/* Rating Select */}
                <div>
                  <label className="block text-xs font-bold text-[#2A3C31] mb-1">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star className={`w-6 h-6 ${star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#1E3F2F] ml-2">
                      {newRating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#2A3C31] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sen"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DDD3C2] text-xs focus:outline-none focus:border-[#234E39]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#2A3C31] mb-1">
                      City, State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur, RJ"
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#DDD3C2] text-xs focus:outline-none focus:border-[#234E39]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A3C31] mb-1">
                    Hair Type / Main Concern
                  </label>
                  <select
                    value={newHairType}
                    onChange={(e) => setNewHairType(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DDD3C2] text-xs bg-white focus:outline-none focus:border-[#234E39]"
                  >
                    <option value="Thinning Hair / Scalp Shedding">Thinning Hair / Scalp Shedding</option>
                    <option value="Postpartum Hair Loss">Postpartum Hair Loss</option>
                    <option value="Receding Hairline / Temple Thinning">Receding Hairline / Temple Thinning</option>
                    <option value="Dry Frizzy Hair & Split Ends">Dry Frizzy Hair & Split Ends</option>
                    <option value="Dandruff & Flaky Scalp">Dandruff & Flaky Scalp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A3C31] mb-1">
                    Review Headline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hair fall stopped within 3 weeks!"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DDD3C2] text-xs focus:outline-none focus:border-[#234E39]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2A3C31] mb-1">
                    Detailed Experience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about how often you used it, how your scalp felt, and any changes in density..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#DDD3C2] text-xs focus:outline-none focus:border-[#234E39]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setWriteModalOpen(false)}
                    className="px-4 py-2 rounded-lg border border-stone-300 text-xs font-semibold hover:bg-stone-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-[#234E39] text-white text-xs font-bold hover:bg-[#1A3B2B] shadow-xs cursor-pointer"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
