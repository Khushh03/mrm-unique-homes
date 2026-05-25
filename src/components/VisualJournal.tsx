/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, MapPin, X, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export function VisualJournal() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});
  const [commentsList, setCommentsList] = useState<Record<string, { user: string; text: string }[]>>({
    'gal-1': [
      { user: 'arch_collector', text: 'Stunning play of indirect shadows. The sandstones blend perfectly.' },
      { user: 'monolith_studio', text: 'Classic high contrast. Loving the forest elements.' }
    ],
    'gal-2': [
      { user: 'editorial_living', text: 'The chairs look extremely organic in this layout!' }
    ],
    'gal-3': [
      { user: 'p_tranquil', text: 'This bedroom setup feels so breathing, very safe color choices.' }
    ]
  });
  
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedList((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedItem || !newCommentName.trim() || !newCommentText.trim()) return;

    const itemId = selectedItem.id;
    const commentRecord = {
      user: newCommentName.trim().replace(/\s+/g, '_').toLowerCase(),
      text: newCommentText.trim()
    };

    setCommentsList((prev) => ({
      ...prev,
      [itemId]: [...(prev[itemId] || []), commentRecord]
    }));

    setNewCommentName('');
    setNewCommentText('');
  };

  return (
    <section id="visual-journal" className="py-24 select-none">
      {/* Header element */}
      <div className="px-6 md:px-20 max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-soft-sage">
            Aesthetic Stream
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
            Visual Journal
          </h2>
        </div>
        <a
          id="follow-instagram-link"
          href="https://instagram.com"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-primary border-b border-primary hover:text-soft-sage hover:border-soft-sage transition-all pb-1 flex items-center gap-1.5"
        >
          Follow Instagram <ArrowRight className="h-4.5 w-4.5" />
        </a>
      </div>

      {/* Grid of gallery */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto">
        {GALLERY_DATA.map((item) => {
          const isLiked = likedList[item.id];
          const calculatedLikes = item.likes + (isLiked ? 1 : 0);
          
          return (
            <motion.div
              key={item.id}
              id={`gallery-item-${item.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-square overflow-hidden rounded-xl bg-surface-container border border-outline-variant/10 group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Translucent overlay details on hover */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 text-on-primary">
                {/* Geotag */}
                <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest">
                  <MapPin className="h-3 w-3 text-soft-sage" /> {item.location}
                </span>

                {/* Engagement counts */}
                <div className="flex justify-between items-center bg-background/95 backdrop-blur px-3 py-2 rounded-lg text-primary shadow-lg border border-outline-variant/10">
                  <button
                    id={`gallery-like-btn-${item.id}`}
                    onClick={(e) => toggleLike(item.id, e)}
                    className="flex items-center gap-1 text-xs hover:text-[#ba1a1a] transition-colors"
                  >
                    <Heart className={`h-4 w-4 ${isLiked ? 'fill-[#ba1a1a] text-[#ba1a1a]' : ''}`} />
                    <strong>{calculatedLikes}</strong>
                  </button>
                  <span className="flex items-center gap-1 text-xs">
                    <MessageCircle className="h-4 w-4 text-soft-sage" />
                    <strong>{(commentsList[item.id] || []).length}</strong>
                  </span>
                  <ZoomIn className="h-4 w-4 text-soft-sage shrink-0" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Light-box & Interactive Comments Panel */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-100 overflow-y-auto" id="lightbox-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-md"
            />
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-background max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-outline-variant/20"
                id="lightbox-panel"
              >
                {/* Close Button button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-4 top-4 p-1.5 rounded-full bg-background/85 text-primary hover:bg-surface-container transition-colors z-20"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-3/5 h-64 md:h-auto min-h-[350px] relative bg-neutral-900 flex items-center justify-center">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-4 left-4 text-xs font-mono tracking-widest text-[#e8f3ed] uppercase bg-primary/30 backdrop-blur px-3 py-1 rounded">
                    {selectedItem.location}
                  </span>
                </div>

                {/* Engagement details and Comments panel */}
                <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6 max-h-[500px] md:max-h-[600px] overflow-y-auto">
                  
                  {/* Top content */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="font-serif text-base font-bold text-primary">Visual Journal</p>
                      
                      {/* Interactive Love Button */}
                      <button
                        id="lightbox-like-btn"
                        onClick={() => toggleLike(selectedItem.id)}
                        className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider py-1.5 px-3 rounded-full border transition-colors ${
                          likedList[selectedItem.id]
                            ? 'bg-[#ba1a1a]/15 text-[#ba1a1a] border-transparent'
                            : 'bg-transparent text-on-surface-variant hover:text-primary border-outline'
                        }`}
                      >
                        <Heart className={`h-3.5 w-3.5 ${likedList[selectedItem.id] ? 'fill-current' : ''}`} />
                        <span>{likedList[selectedItem.id] ? 'Liked' : 'Like'}</span>
                      </button>
                    </div>

                    <p className="font-sans text-xs text-on-surface-variant italic">
                      "Each photograph captures a direct intersection of sandstone, warmth, and natural linens under natural sunrise panels."
                    </p>

                    {/* Total Likes */}
                    <div className="text-xs text-on-surface border-t border-outline-variant/15 pt-3">
                      Liked by <strong>{selectedItem.likes + (likedList[selectedItem.id] ? 1 : 0)} residents</strong>
                    </div>

                    {/* Comments Scrollable List */}
                    <div className="space-y-3 pt-2">
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-soft-sage">
                        Journal Replies ({(commentsList[selectedItem.id] || []).length})
                      </span>
                      <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
                        {(commentsList[selectedItem.id] || []).map((comm, idx) => (
                          <div key={idx} className="text-xs space-y-0.5 border-b border-outline-variant/5 pb-2">
                            <span className="font-mono font-bold text-primary">@{comm.user}</span>
                            <p className="font-sans text-on-surface-variant leading-relaxed">{comm.text}</p>
                          </div>
                        ))}
                        {(!commentsList[selectedItem.id] || commentsList[selectedItem.id].length === 0) && (
                          <p className="text-xs italic text-on-surface-variant/60">No responses yet. Be the first to reply.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Add Comments form */}
                  <form onSubmit={handlePostComment} className="pt-4 border-t border-gray-150 space-y-2">
                    <input
                      id="comment-input-name"
                      required
                      type="text"
                      value={newCommentName}
                      onChange={(e) => setNewCommentName(e.target.value)}
                      placeholder="Username (e.g. arch_fan)"
                      className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-xs text-black bg-white placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                    />
                    <div className="flex gap-2">
                      <input
                        id="comment-input-text"
                        required
                        type="text"
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                        placeholder="Add reply..."
                        className="flex-1 rounded-xl border border-gray-200 px-3.5 py-2.5 text-xs text-black bg-gray-50 placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                      />
                      <button
                        id="comment-post-btn"
                        type="submit"
                        className="bg-black hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                      >
                        Post
                      </button>
                    </div>
                  </form>

                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
