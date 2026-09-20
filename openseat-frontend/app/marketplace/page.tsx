"use client";

import React from "react";
// Fixed relative layout mappings pointing straight into the root boundaries
import { Nav } from "../../components/ui/Nav";
import { Input } from "../../components/ui/Input";
import { FilterSidebar } from "../../components/marketplace/FilterSidebar";
import { JobRoomCard } from "../../components/marketplace/JobRoomCard";
import { useJobRooms } from "../../src/hooks/useJobRooms";

export default function MarketplaceDashboardPage() {
  const { rooms, filters, updateFilters } = useJobRooms();

  const handleDispatchedBid = (roomId: string) => {
    console.log(`Bid transaction mapped to targeted room ID: ${roomId}`);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--canvas)", color: "var(--ink)" }}>
      <Nav 
        brand="OpenSeat Marketplace"
        items={[
          { label: "Find Work", active: true },
          { label: "My Active Bids" },
          { label: "Finances Hub" }
        ]}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "var(--space-6, 24px) var(--space-4, 16px)" }}>
        
        <div style={{ marginBottom: "var(--space-6, 24px)" }}>
          <Input 
            placeholder="Search open project rooms (e.g. WooCommerce, CMO, Marketing)" 
            value={filters.searchQuery}
            onChange={(e) => updateFilters({ searchQuery: e.target.value })}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "var(--space-6, 24px)", alignItems: "start" }}>
          
          <FilterSidebar filters={filters} onFilterChange={updateFilters} />

          <main>
            <div style={{ marginBottom: "var(--space-4, 16px)" }}>
              <span className="label text-ink-muted">
                Showing {rooms.length} available project rooms matching search parameters
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4, 16px)" }}>
              {rooms.map((roomItem) => (
                <JobRoomCard 
                  key={roomItem.id} 
                  room={roomItem} 
                  onBidAction={handleDispatchedBid} 
                />
              ))}
            </div>

            {rooms.length === 0 && (
              <div style={{ textAlign: "center", padding: "var(--space-8, 32px) 0" }}>
                <p className="h3 text-ink-muted">No active job rooms match your selected configuration filters.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
